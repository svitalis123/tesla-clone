import React from 'react'
import './Item.css'
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Item({title, desc, deslink, backgroundimg,
     leftitemtext, leftitemlink, rightitemtext, rightitemlink, twobuttons, first}) {
    return (
        <div className="Item" style={{ backgroundImage: `url(${backgroundimg})`}}>
            <div className="Item__container">
                <div className="Item__text">
                    <p>{title}</p>
                    <div className="Item_desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="Item__lower">
                    <div className="twobuttons">
                        <Button inp="primary" link={leftitemlink} text={leftitemtext}/>
                        {
                            twobuttons && (
                                <Button inp="secondary" link={rightitemlink} text={rightitemtext}/>
                            )
                        }
                    </div>
                    {
                        first && (
                            <div className="button__down">
                                    <ExpandMoreIcon fontSize="large" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Item
