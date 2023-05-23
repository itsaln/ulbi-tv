import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {

	// Если не используем typescript - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[name]__[hash:base64:8]'
					}
				}
			},
			'sass-loader'
		]
	}

	return [typescriptLoader, styleLoader]
}
