import dataArray from "../utils/dataArray";

const Checkbox = ({ data, checked, setChecked }) => {
  console.log(checked);

  const handleChecked = (isChecked, node) => {
    
    setChecked(prev => {
      const newChecked = {
        ...prev,
        [node.id]: isChecked,
      };
      const updateChildren =(node)=>{
          node.children.forEach(childe=>{
            newChecked[childe.id]=isChecked
            childe.children && updateChildren(childe)
          })
      }

      const isAllChildrenChecked=(node)=>{
        if (!node.children) return newChecked[node.id] || false
        const checkedChildren =  node.children.every(child=>isAllChildrenChecked(child))
        newChecked[node.id]= checkedChildren
        return checkedChildren
      }

      dataArray.forEach(node=>isAllChildrenChecked(node))
     node.children && updateChildren(node)
       
      return newChecked;
    });
  };

  return (
    <div className="checkbox-container">
      {data.map(node => (
        <div key={node.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              name={node.name}
              checked={checked[node.id] || false}
              onChange={e => handleChecked(e.target.checked, node,)}
            />
            {node.name}
          </label>
          {node.children && (
            <Checkbox
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
