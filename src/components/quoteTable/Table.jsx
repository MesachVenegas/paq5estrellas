import './table.css';

const Table = () => {


    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th className='concept'>Conceptos</th>
                        <th className='send_type'>Terrestre</th>
                        <th className='send_type'>Aéreo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>contenido 1</td>
                        <td>contenido 2</td>
                        <td>contenido 3</td>
                    </tr>
                    <tr>
                        <td>contenido 1</td>
                        <td>contenido 2</td>
                        <td>contenido 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;