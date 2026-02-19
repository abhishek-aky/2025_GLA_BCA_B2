import React, { useEffect, useState } from 'react'

function GitHub({usernaam}) {
  let [users, setUsers]  =  useState({imgUrl:"", followers:0, following:0, bio:""});
    useEffect(()=>{
        fetch(`https://api.github.com/users/${usernaam}`).then(async function(res){
            let data = await res.json();
            console.log(data);
            let {avatar_url, followers, following, bio} = data;
            setUsers(()=>{
              return {
                imgUrl:avatar_url,
                followers:followers,
                following:following,
                bio:bio
              }
            });
        })
    }, []);
  return (
    <div style={{border:"2px dashed salmon", backgroundColor:"whitesmoke" , color:"black"}}>
        <img src={users.imgUrl} alt="img" />
        <figure>
          <p>ID : {usernaam}</p>
          <p>Followers : {users.followers}</p>
          <p>Following : {users.following}</p>
          <p>Bio : {users.bio}</p>

        </figure>
    </div>
  )
}
export default GitHub;




