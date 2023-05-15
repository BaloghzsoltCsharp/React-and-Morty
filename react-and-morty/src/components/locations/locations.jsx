import React from 'react'
import './locations.css'
import { useLocations } from '../../api/useData'
import PagePagination from '../pagination/PagePagination'
import { useState } from 'react';

const Card = (detail) => {

    const [modal, setModal] = useState(false);


    let location = detail.detail;
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }



    return (
        <div className='ram_locations-container_card' key={location.id}onClick={() => { toggleModal() }}>
            <h3> {location.name} </h3>
            {
                <React.Fragment key={location.id}>                        
                        {modal && (
                            <div>
                                <div className="overlay"></div>
                                <div className="modal-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h3 ><b>Name: </b>{location.name}</h3><br />
                                                    <b>Type: </b> {location.type}<br />
                                                    <b>Dimension: </b> {location.dimension}<br />
                                                    <b>Residents: </b> {location.residents.length}<br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="close-modal" onClick={toggleModal}>
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        )
                        }
                </React.Fragment>
            }

        </div>
    )
}


const Locations = () => {

    const [pageNum, setPageNum] = useState(1);
    const changePage = (page) => { setPageNum(page) }

    let locations = useLocations(pageNum);

    if (locations === 'Loading...') {
        return (
            <p></p>
        )
    }
    return (
        <React.Fragment>
        <div className="ram_locations-title"><p>Locations</p></div>
        <div className="ram_locations-container">
            {locations.results.map(location => (
                <Card key={location.id} detail={location} />
            ))}
            
        </div>
        <PagePagination pageNum={locations.info.pages} changePage={changePage} currentPage={pageNum} />
        </React.Fragment>

    )
}



export default Locations