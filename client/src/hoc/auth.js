import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

/**
 * 
 * @param {*} SpecificComponent 
 * @param {*} option null => 아무나 출입가능 / false => 로그인이면 출입불가 / true => 로그인해야 출입가능
 * @param {*} adminRoute 
 */
export default function (SpecificComponent, option, adminRoute = null) {
    function AuthentificationCheck(props) {
        const dispatch = useDispatch();
        const [data, setData] = useState({});
        
        useEffect(() => {
            dispatch(auth()).then(response => {
                setData(response.payload);
                // 로그인하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                } else { // 로그인한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(!option) {
                            props.history.push('/');
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent data={data}/>
        )
    }

    return AuthentificationCheck
}