const BoxForChildren = ( {children} ) => {
  
  const styles = { border: 'green 2px solid', padding: '20px', margin: '20px' }

  return (
    <div style={styles}>
        {children}
        <h3>Box Header</h3>
        <h3>Middle</h3>
        <h3>Box Footer</h3>
    </div>
  )
}
export default BoxForChildren