/**
 * SkyView Worker — Static site serving
 * Lead handling moved to Supabase Edge Functions.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
