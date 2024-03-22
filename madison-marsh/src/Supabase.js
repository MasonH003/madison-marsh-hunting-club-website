import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react';

export const supabase = createClient("https://esqtwwwdeaqfwddehjyr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcXR3d3dkZWFxZndkZGVoanlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMjEzNTgsImV4cCI6MjAyNjY5NzM1OH0.ECIwCL2P9tc-7y9flKilvcqpS9GBquaDCnpU0qZXyBI");

