import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://nyrbghygonkkdgtmmlap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cmJnaHlnb25ra2RndG1tbGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3Nzc1NDEsImV4cCI6MjAzNjM1MzU0MX0.4hR1uZplce3VMcQnNjUHSAus62Orkh8UryMNJ_-W5Zc')