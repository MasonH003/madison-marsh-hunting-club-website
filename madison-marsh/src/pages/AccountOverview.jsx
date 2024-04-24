import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';
import {RedButton} from '../components';
import React, { useEffect, useState } from 'react';


function AccountOverview() {
  
    const navigate = useNavigate();

    const [currUser, setCurrUser] = useState(null);
    const [userEmail, setUserEmail] = useState("");
    const [userId, setUserId] = useState(-1);

    const signOutUser = async () => {
        try {
          const { error } = await supabase.auth.signOut();
    
          if (error) {
            throw error;
          } else {
            console.log('User logged out successfully');
            [
              window.localStorage,
              window.sessionStorage,
            ].forEach((storage) => {
              Object.entries(storage)
                .forEach(([key]) => {
                  storage.removeItem(key)
                })
            })
            navigate('/Home');
          }
        } catch (error) {
          console.log('Error logging out: ', error.message);
        }
      }
  
      // Incomplete
      const updateUsername = async({newUsername}) => {
        const { error } = await supabase
            .from('userdata')
            .update({ username : {newUsername} })
            .eq('id', user.id)
      }

      const [visible, setVisible ] = useState(false);

      const fetchUserData = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setCurrUser( user );
            setUserEmail( user.email );
            //setUserId( user.id );
            console.log("email is " + user.email );
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            navigate('/SigninSignup')
        }
        /*try {
          const { userdata, error } = await supabase
              .from('userdata')
              .select('username, permission')
              .eq('id', user.id)
              .single()
        } catch (error) {
          
          const { error2 } = await supabase
          .from('userdata')
          .insert({ id: user.id, username: "user", permission: 0 })
        }*/
    }
      
    useEffect(() => {  //using "useEffect" stops the component from continuously calling this method and rerendering forever
      fetchUserData();
  }, []);

    return (
      <accoverview>
        <Header/>
        <div className = "text-4xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center p-4">
          Account Overview 
          
        </div>
        <div className = "text-4xl justify-left flex pb-4">
        <p>Email: {userEmail}</p>
        </div>
        <div className = "bg-MMHCBlack text-MMHCCream flex flex-col items-center">

          <RedButton onClick = {signOutUser} label = {'Logout'}/>
          <RedButton onClick = {()=> setVisible(!visible)} label = {'Change Username'}/>
          {visible ? 
              <div className={"visible"}>
                <form action={updateUsername} class="p-2"> New Username:
                  <input name="query" class="p-2 rounded text-MMHCBlack" />
                  <button type="submit" class="bg-MMHCRed border-MMHCBlack rounded p-2">Submit</button>
                </form>
              </div>
              :
              <div className={"invisible"}></div>
            }
        </div>


        <Footer/>
      </accoverview>
  );
}

export default AccountOverview;