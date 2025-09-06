-- Remove the public read policy that exposes all waitlist data
DROP POLICY IF EXISTS "Allow public read on waitlist" ON public.waitlist;

-- Add email validation constraint
ALTER TABLE public.waitlist ADD CONSTRAINT valid_email_format 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add constraint to ensure name is not empty or just whitespace
ALTER TABLE public.waitlist ADD CONSTRAINT valid_name_format 
CHECK (trim(name) != '' AND length(trim(name)) >= 2);

-- Add constraint to limit field lengths to prevent abuse
ALTER TABLE public.waitlist ADD CONSTRAINT reasonable_field_lengths 
CHECK (
  length(name) <= 100 AND 
  length(email) <= 255 AND 
  length(causes) <= 500
);