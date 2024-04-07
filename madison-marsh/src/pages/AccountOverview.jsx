import { Header, Footer } from '../sections';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';
import { useNavigate } from 'react-router-dom';
import {RedButton} from '../components';
import React, { useEffect, useState } from 'react';

function AccountOverview() {
  
    const navigate = useNavigate();

    const fetchUserData = async () => {

        try {
            const { data: { user } } = await supabase.auth.getUser();
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    }

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
            .from('users')
            .update({ display_name : {newUsername} })
            .eq('id', 1)
      }

      const [visible, setVisible ] = useState(false);
  
    return (
    <accoverview>
      <Header/>
      <div className = "text-4xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center p-4">
        Account Overview
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