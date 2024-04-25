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
    const [visible, setVisible ] = useState(false);
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState(username);

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
  
      
      const updateUsername = async() => {
        console.log(newUsername);
        if( newUsername === '' ) {
          alert("Invalid username: cannot have an empty username");
          return;
        }
        const { error } = await supabase
            .from('userdata')
            .update({username:  newUsername })
            .eq('id', userId)
      }

  

      const fetchUserData = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setCurrUser( user );
            setUserEmail( user.email );
            setUserId( user.id );
            console.log("email is " + user.email );
            console.log(user);

            
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            navigate('/SigninSignup')
        }
    }

    const fetchUsername = async () => {
      try {
        if( userId === -1 ) {
          return;
        }
        const { data, error } = await supabase
            .from('userdata')
            .select()
            .eq('id', userId)
            .single()
        console.log("test " + userId );
        console.log(data);
        console.log("username is " + data.username );
        setUsername(data.username);

      } catch (error) {
          const { error2 } = await supabase
          .from('userdata')
          .insert({ id: userId, username: "user", permission: 1 })
          console.log( "inserting" );
      }
    }


    useEffect(() => {
      if (userId) {
          fetchUsername();
      }
  }, [userId]);
      
    useEffect(() => {  //using "useEffect" stops the component from continuously calling this method and rerendering forever
      fetchUserData();
  }, []);

    function changeUsernameButton() {
      setVisible(!visible);
      setNewUsername("");
    }

    return (
      <accoverview>
        <Header/>
        <div className = "text-4xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center p-4 pb-14">
          Account Overview 
          
        </div>
        <div className = "text-3xl justify-left flex pb-4">
        <p>Email: {userEmail}</p>
        </div>
        <div className = "text-3xl justify-left flex pb-4 ">
        <p className = "pr-2">Username: {username}</p>
        
        <button onClick = {changeUsernameButton} class="btn btn-error rounded p-2 text-1s">Change Username</button>
          {visible ? 
              <div className={"visible"}>
                <form class="text-3xl p-2"> New Username: 
                  <input name="query" class="p-2 rounded text-MMHCBlack text-sm" onChange = {(e) => setNewUsername(e.target.value)}/>
                  <button onClick = {updateUsername} class="btn btn-error rounded p-2">Submit</button>
                </form>
              </div>
              :
              <div className={"invisible"}></div>
            }
        </div>
        <div className = "bg-MMHCBlack text-MMHCCream flex flex-col items-center">


          <button onClick = {signOutUser} class="btn btn-error rounded p-2 ">Logout</button>
          
        </div>


        <Footer/>
      </accoverview>
  );
}

export default AccountOverview;