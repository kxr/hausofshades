const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Prefixes an internal path with the configured base, e.g. url('hair/'). */
export const url = (path = '') => base + path.replace(/^\//, '');
