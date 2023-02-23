export const isMenuItemActive = (
  menuItemPath: string,
  pathName: string,
  slug?: string | string[]
) => {
  /** Active state for home page */
  if (menuItemPath === '/' && pathName !== '/') {
    return false
  }

  if (pathName === menuItemPath) return true

  if (!slug) return false

  /**
   * Returns 'welcome' if path is 'docs/getting-started/welcome'
   */
  const lastUrlParam = menuItemPath.split('/').splice(-1)[0]

  if (Array.isArray(slug)) {
    return slug.includes(lastUrlParam)
  }

  return slug.includes(lastUrlParam)
}
