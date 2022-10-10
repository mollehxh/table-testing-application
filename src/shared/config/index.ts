/**
 * Env variables initialization module
 * @remark If the value of at least one variable is not found,
 * The application will immediately throw an error when the module is initialized
 *@module
 */

/**
 * Get env variable
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

/** API entry point */
export const API_URL = getEnvVar('REACT_APP_API_URL');
