import { Header, Footer } from '../sections';
import { getPerms } from '../components/PermissionGetter.js';
import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Supabase.js';

    


function EmergencyContacts() {
    const [userId, setUserId] = useState(-1);
    const [perms, setPerms] = useState(-1);
    const [memberNames, setMemberNames ] = useState([]);
    const [memberNumbers, setMemberNumbers ] = useState([]);

    getPerms( setUserId, setPerms );
    const navigate = useNavigate();

    const [emergencyNameDisplay, setEmergencyNameDisplay] = useState("");
    const [emergencyNumberDisplay, setEmergencyNumberDisplay] = useState("911");

    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyNumber, setEmergencyNumber] = useState("");


    const fetchUserData = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setUserId( user.id );
            

            
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            //navigate('/SigninSignup')
        }
    }

    const fetchEmergencyContact = async () => {
        try {
          if( userId === -1 ) {
            return;
          }
          const { data, error } = await supabase
              .from('userdata')
              .select()
              .eq('id', userId)
              .single()
          setEmergencyNameDisplay(data.emergency_contact_name);
          setEmergencyNumberDisplay(data.emergency_contact_number);
  
        } catch (error) {
            /*const { error2 } = await supabase
            .from('userdata')
            .insert({ id: userId, username: "user", permission: 1 })
            console.log( "inserting" );*/
        }
      }

      /*const seeEmergencyContacts = async () => {
        try {
          const {data, error } = await supabase 
            .from('userdata')
            .select()
            .eq('permission', 2)
          
          
            
        } catch (error) {
          console.log("Error fetching all member emergency contacts: " + error );
        }
      }*/

    const updateEmergencyContact = async() => {
        event.preventDefault();
        if( emergencyName === '' ) {
          alert("Invalid contact name: cannot have an empty name");
          return;
        } else if ( emergencyNumber.length != 10 || !/^\d+$/.test(emergencyNumber) ) {
          alert("Invalid number: emergency contact number must be 10 digits long and contain only numbers.");
          return;
        }
        console.log("name is " + emergencyName );
        console.log("number is " + emergencyNumber );
        const { error } = await supabase
            .from('userdata')
            .update({emergency_contact_name:  emergencyName })
            .eq('id', userId)
        
        const { error2 } = await supabase
            .from('userdata')
            .update({ emergency_contact_number: emergencyNumber })
            .eq('id', userId)
        console.log("succ?")
        
        setEmergencyNameDisplay( emergencyName );
        setEmergencyNumberDisplay( emergencyNumber );
    
      }



      useEffect(() => {
        console.log("id is " + userId );
        fetchEmergencyContact();
        
    }, [userId]);
        
      useEffect(() => {  //using "useEffect" stops the component from continuously calling this method and rerendering forever
        fetchUserData();
        //seeEmergencyContacts();
    }, []);

    return (
        <>
        { perms >= 2 ? 
        <div> 
        <Header/>
        <div className = "text-3xl justify-left flex pb-4 pl-2">
        <p>Emergency Contact Name: {emergencyNameDisplay}</p>
        </div>
        <div className = "text-3xl justify-left flex pb-4 pl-2">
        <p className = "pr-2">Emergency Contact Number: {emergencyNumberDisplay}</p> </div>
        <form class="text-3xl p-2"> Change Emergency Contact Info:  
                  <input id="name" name="query" class="p-2 rounded text-MMHCBlack text-sm" placeholder = "Contact's Name" onChange = {(e) => setEmergencyName(e.target.value)}/>
                  <input id="number" name="query" class="p-2 rounded text-MMHCBlack text-sm" placeholder = "Contact's Number" onChange = {(e) => setEmergencyNumber(e.target.value)}/>
                  <button onClick = {updateEmergencyContact} class="btn btn-error rounded p-2">Submit</button>
                </form>

        <Footer/>
        </div>
        :
        <>{/*navigate('/Home')*/}</>
        }
        </>
    )
}



export default EmergencyContacts;