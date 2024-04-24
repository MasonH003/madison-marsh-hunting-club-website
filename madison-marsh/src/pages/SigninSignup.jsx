import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';

function SigninSignup() {
  
    const navigate = useNavigate();
  
    supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        console.log('SIGNED_IN', session);
        navigate('/AccountOverview');
    } else if (event === 'SIGNED_OUT') {
        console.log('SIGNED_OUT', session);
    } else {
        console.log("No action taken.")
    }
  })
  
  
    return (
    <signinsignup>
      <Header/>
      <div className = "text-2xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center">
        <div>
        <Auth supabaseClient={supabase} providers={['google']} appearance={{
 
            extend: false,
            className: {
                button: "btn btn-error bg-MMHCRed hover:bg-MMHCLightRed text-white border-MMHCGreen hover:text-[#c0c0c0]",
                container: "flex flex-col items-center pt-2 gap-4 pb-2",
                input: "rounded-md p-2 flex-row",
                divider: "p-2",
                label: "pr-4",
                anchor: "hover:text-MMHCLightRed"
            }
}}/>
      </div>
      </div>
      <Footer/>
    </signinsignup>
  );
}

export default SigninSignup;