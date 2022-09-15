import { useState , Fragment} from 'react';

import './Breadcrumb.css'

function Breadcrumbs({data}) {
    //   state untuk simpan total data breadcrumbs
  const [count, setCount] = useState(data?.length - 1);

  // jika jumlah item itu sama dengan count berarti itu adalah list breadcrumb yang aktif
  return (
    <nav>
        <ol className="breadcrumb">
        {data.map((item, index) => (
          <Fragment key={index}>
           {index !== count ? (
            <li className="breadcrumb-item"><a href={item.url}>{item.title}</a></li>
           ) : (
            <li className="breadcrumb-item active">{item.title}</li>
           )}
          </Fragment>
        ))}
        </ol> 
    </nav>
  )
}

export default Breadcrumbs