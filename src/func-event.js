import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCancel =() =>{
        alert('Cancel')
    }

    let banner = './image/symmetry.jpg'
    let url = 'http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.photoschoolthailand.com%2F20-tips-photography-composition%2F&psig=AOvVaw285BaIwUB-7XKJOqb-JGW6&ust=1682997524222000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD1z8OU0_4CFQAAAAAdAAAAABAW.org' 

    const bannerClick =() => {
        window.open(url)
    }
    return(
        <div>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointter',width:'20%'}} />
            <button onClick={onClickButtonOK}>OK</button>
            <button onClick={onClickButtonCancel}>Cancel</button> 
        </div>
    )
}