import { IBuildOptions } from './types/config'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export function buildPlugins({
	paths
}: IBuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}
