import { useContext } from 'react'
import BookmarkContext from 'context/bookmark/BookmarkContext'
import { FaBookmark } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Bookmark = (props) => {
    var { bookmark, dispatch } = useContext(BookmarkContext)

    const handleBookmark = () => {
        dispatch({
            type: 'SWITCH_BOOKMARK'
        })
    }

    if(props.isBookmark) {
        return (
            <div role="button" aria-pressed="false" onClick={handleBookmark} className="group flex flex-row gap-3 bg-grey-custom-200  rounded-full">
                  <span className="bg-blue-button-primary text-grey-custom-300 transition ease-in-out duration-300 group-hover:bg-blue-button-hover w-14 h-14 rounded-full flex justify-center items-center">
                      <FaBookmark className='text-white'/>
                  </span>
                  <p className='font-bold text-blue-button-primary group-hover:text-blue-button-hover  group-hover:opacity-80 transition ease-in-out duration-300 text-lg py-4 pr-5 hidden md:inline-block'>Bookmarked</p>
            </div>
        )
    }

    if(props.isNotBookmark) {
        return (
            <div role='button' aria-pressed="false" onClick={handleBookmark} className="group flex flex-row gap-3 bg-grey-custom-200  rounded-full">
                <span className="bg-grey-custom-600 text-grey-custom-300 transition ease-in-out duration-300 group-hover:bg-grey-custom-300 w-14 h-14 rounded-full flex justify-center items-center">
                    <FaBookmark className='text-slate-300'/>
                </span>
                <p className='font-bold text-grey-custom-500 group-hover:opacity-80 transition ease-in-out duration-300 text-lg py-4 pr-5 hidden md:inline-block'>Bookmark</p>
            </div>
        )
    } 
}

Bookmark.propTypes = {
    isBookmark: PropTypes.bool,
    isNotBookmark: PropTypes.bool
}

export default Bookmark