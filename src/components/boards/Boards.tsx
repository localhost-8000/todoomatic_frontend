import { FilterAltOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Board } from '../../types/Board';
import { getBoards } from '../../utils/ApiCalls';
import Loading from '../common/Loading';
import Modal from '../common/Modal';
import BoardCard from './BoardCard';
import CreateBoard from './CreateBoard';

export default function Boards() {
    const [open, setOpen] = useState(false);
    const [boards, setBoards] = useState<Board[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchAllBoards = async () => {
            try {
                setLoading(true);
                const data = await getBoards();
                setBoards(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAllBoards();
    }, []);

    const closeModal = () => setOpen(false);

    return (
        <div className="pt-5 relative">
            <h1 className="text-4xl font-semibold text-dark-gray">My Boards</h1>
            <div className="flex justify-between mt-10">
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white"><FilterAltOutlined name='FilterAltOutlinedIcon' fontSize="small" color="inherit" /> Filter</button>
                </div>
                <div className="">
                    <button 
                        type="button" 
                        onClick={_ => setOpen(true)}
                        className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white"
                    >
                        New Board
                    </button>
                </div>
            </div>
            <Modal open={open} onCloseCB={closeModal}>
                <CreateBoard closeModalCB={closeModal}/>
            </Modal>

            <div className="flex flex-wrap min-h-[200px] justify-between mt-8">
                {loading ? <Loading /> : boards.map(board => <BoardCard key={board.id} boardData={board} />)}
            </div>
        </div>
    );
}
