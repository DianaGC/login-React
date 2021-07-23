import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {getBookings} from "../../store/ActionCreator";

const Bookings =() =>{
    const dispatch = useDispatch();
    const bookings = useState(state => state.bookings)

    useEffect(()=>{
        dispatch(getBookings())
    },[])


    return(

        <>
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={bookings}
                selectableRows // add for checkbox selection
                onSelectedRowsChange={handleChange}
                clearSelectedRows={this.state.toggledClearRows}
            />
        </>
    )
}
export default Bookings
