import { createClient } from "@supabase/supabase-js";

// Creating a Supabase client instance using environment variables
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
