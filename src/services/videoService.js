import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://thaljzlyoeazncmpkkdl.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoYWxqemx5b2Vhem5jbXBra2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTIxMDcsImV4cCI6MTk4Mzc4ODEwN30.DaimnysCbJrlOa1G6iPj-o476x06SFawA8teTSjzm1A";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}