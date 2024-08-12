// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zuoaqrnrwdezmaxkkqsr.supabase.co/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1b2Fxcm5yd2Rlem1heGtrcXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNTU2NDEsImV4cCI6MjAzNzkzMTY0MX0.76tgHNaNU1ZqBHVJ82Ar44yXv5JxngnRTGqSlKdzpyg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
