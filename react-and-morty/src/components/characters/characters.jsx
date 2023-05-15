import { useState } from 'react'
import './Character.css'
import { useCharacters } from "../../api/useData";
import PagePagination from '../pagination/PagePagination';

const Card = (detail) => {
    let character = detail.detail;
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (character.type === '') {
        character.type = "NULL"
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div key={character.id} className="card" onClick={toggleModal}>
            <img src={character.image} alt="characters img" ></img>
            <h3> {character.name} </h3>
            <p> {character.species} </p>
            {modal && (
                <div>
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <table>
                            <tbody>
                                <tr>
                                    <td><img src={character.image} alt="pic of the char" className="modalimg"></img><br /></td>
                                    <td><h3 ><b>Name: </b>{character.name}</h3><br />
                                        <b>Gender: </b> {character.gender}<br />
                                        <b>Status: </b> {character.status}<br />
                                        <b>Species: </b> {character.species}<br />
                                        <b>Type: </b> {character.type}<br />
                                        <b>Origin: </b> {character.origin.name}<br />
                                        <b>Location: </b> {character.location.name}<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            }
        </div>
    )
}


const Characters = () => {
    const [pageNum, setPageNum] = useState(1);
    const changePage = (page) => { setPageNum(page) }

    const characters = useCharacters(pageNum);
    if (characters === "Loading...") {
        return (<p></p>)
    }
    return (
        <div className='characters'>
            
            <div className="card-container">
                {characters.results.map(character => (
                    <Card key={character.id} detail={character} />
                ))}
            </div>

            <PagePagination pageNum={characters.info.pages} changePage={changePage} currentPage={pageNum}/>

        </div>

    )
}

export default Characters