-- Create RLS policies for the waitlist table to allow public access
-- Since this is a public waitlist, we need to allow anyone to insert

CREATE POLICY "Allow public insert on waitlist" 
ON public.waitlist 
FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow public read on waitlist" 
ON public.waitlist 
FOR SELECT 
TO anon 
USING (true);