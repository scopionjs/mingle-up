import React from 'react'
import { Index_nav } from '../components/index/nav';
import { Item1 } from '../components/index/item1';
import { Item2 } from '../components/index/item2';
import { Item3 } from '../components/index/item3';
let Index =()=>{
    return(
        <div className='index' >
            <div className='index-layer1'>
            <Index_nav />
            <Item1 />
            <Item2 />
            </div>
            <div className='index-layer2'>
                <Item3 />
            </div>
        </div>
    )
}
export {Index};