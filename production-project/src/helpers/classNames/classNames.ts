type Mods = Record<string, boolean>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
	return [
		cls, ...additional,
		Object.entries(mods).filter(([key, value]) => )
	].join(' ')
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pdg'])
