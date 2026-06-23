
CREATE TABLE public.waitlist (
  id BIGSERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  causes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT valid_email_format CHECK (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_name_format CHECK (name IS NULL OR char_length(name) >= 2),
  CONSTRAINT reasonable_field_lengths CHECK (
    (name IS NULL OR char_length(name) <= 100) AND
    (email IS NULL OR char_length(email) <= 255) AND
    (causes IS NULL OR char_length(causes) <= 500)
  )
);

GRANT INSERT ON public.waitlist TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.waitlist_id_seq TO anon, authenticated;
GRANT ALL ON public.waitlist TO service_role;
GRANT ALL ON SEQUENCE public.waitlist_id_seq TO service_role;

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.waitlist FOR SELECT
  USING (false);
