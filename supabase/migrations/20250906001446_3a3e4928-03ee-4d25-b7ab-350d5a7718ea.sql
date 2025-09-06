-- Create a restrictive SELECT policy that prevents unauthorized access
-- This policy ensures NO ONE can read waitlist data until proper admin authentication is implemented
CREATE POLICY "Restrict waitlist SELECT access" 
ON public.waitlist 
FOR SELECT 
USING (false);

-- Add a comment to explain the security posture
COMMENT ON POLICY "Restrict waitlist SELECT access" ON public.waitlist IS 
'Security policy: Prevents all SELECT access to protect customer data until admin authentication is implemented';