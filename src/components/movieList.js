import React from 'react'
import { Link } from 'react-router'
import { deleteMovie, updateMovie } from '../actions'

export default ({movies}) => movies.map(({status, genres, description, name, id, links}) =>
  <li className={`list-group-item ${status=='watched' ? 'is-watched' : ''}`} key={id}>
    <details>
      <summary>
        <strong>{name}</strong>
        {links && links.length ?
          <a
          className="pull-xs-right"
          href={links[0].linkAddress}
          target="_blank">
            {links[0].linkName}
          </a> : '' }
      </summary>
      <div className='flex-container'>
        <div>
          {links && links.length > 1 ? links.map(({linkName, linkAddress}, i) => i==0 ? '' :
              <div key={linkAddress}>
                <a href={linkAddress} target="_blank">{linkName}</a>
              </div>
            ) : ''}
          {genres && genres.length ?
            <p>
              genres: {genres.map(genre => (
                genre==genres[genres.length-1] ? genre : genre + ', ')
              )}
            </p> : ''}
          {description?<p>{description}</p>:''}
          <span>
            <input
              id={id}
              type="checkbox"
              defaultChecked={status=='watched'}
              onClick={e => updateMovie(id, {status: e.target.checked ? 'watched' : 'notWatched'})}
            />
            <label style={{width: "125px"}} htmlFor={id}>
              {status=='watched' ? 'Watched' : 'Not Watched'}
            </label>
          </span>
        </div>
        <div>
          <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
          <button
            className="btn btn-danger"
            onClick={()=>{
              if (confirm(`! Warning : This action can't be undone.\nDelete movie "${name}"?`)) {
                deleteMovie(id);
              }
            }}>
            Delete
          </button>
        </div>
      </div>
    </details>
  </li>
)