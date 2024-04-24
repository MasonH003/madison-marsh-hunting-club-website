/*import React, { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../Supabase';

function getPerms() {
    const [userId, setUserId] = useState(0);
    const fetchUserData = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            setUserId( user.id );

            const { data, error } = await supabase
              .from('userdata')
              .select()
              .eq('id', userId)
              .single()
            perms = data.permission;
            return perms;
        } catch (error) {
            console.error("Error fetching user data:", error.message);
            return -1;
        }
        try {
          const { data, error } = await supabase
              .from('userdata')
              .select()
              .eq('id', userId)
              .single()
          //console.log("test");
          //console.log(data);
          console.log("username is " + data.username );

        } catch (error) {
          
        }
    }
}


export default PermissionGetter;*/