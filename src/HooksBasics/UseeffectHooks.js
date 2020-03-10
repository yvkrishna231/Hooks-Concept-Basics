import React, { useState, useEffect } from 'react';

const UseeffectHooks = () => {

  const [name, setName] = useState({ Name: '' });

  useEffect(() => {
    document.title = `${name.Name} written hooks`
  })

  return (
    <div>
      <input type='text' value={name.Name} onChange={(e) => setName({ Name: e.target.value })} />
      <h3>{name.Name} written hooks</h3>
    </div>
  );
};

export default UseeffectHooks;