import React from 'react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

export const CustomeIcon=(props)=> {
    return (
        <div>
            {
                props.heart?
                <HeartFilled style={{color:"red"}}/>
                    :
                <HeartOutlined  style={{color:"red"}}  />
                
            }
        </div>
    )
}
