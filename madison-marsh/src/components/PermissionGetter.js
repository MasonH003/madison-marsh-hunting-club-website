import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';

export async function getPerms( setUserId, setPerms ) {

    const [usId, setUsId] = useState(-1);
    const fetchUser = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setUserId( user.id );
            //console.log("user is " + user + "; userid is " + user.id);
            setUsId(user.id);
            
        } catch (error) {
            console.error("Error fetching user:", error.message);
            return -1;
        }
    }
    const fetchUserPerms = async () => {
        try {
            const { data, error } = await supabase
              .from('userdata')
              .select()
              .eq('id', usId)
              .single()
            setPerms(data.permission);
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            return -1;
        }
    }


    fetchUser()
        .then( function () {
            fetchUserPerms();
        }
    )
    
    /*useEffect(() => {
        if (usId) {
            fetchUserPerms();
        }
    }, [usId]);
        
      useEffect(() => {  //using "useEffect" stops the component from continuously calling this method and rerendering forever
        fetchUser();
    }, []);*/
}
