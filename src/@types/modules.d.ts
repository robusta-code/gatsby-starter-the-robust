declare module "*.jpg";
declare module "*.png";

/**
 * Warning : don't export anything here : https://stackoverflow.com/a/59282975/968988
 *
 * ... Conversely, a file without any top-level import or export declarations is treated as a script
 * whose contents are available in the global scope
 */
