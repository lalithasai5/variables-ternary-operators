import React from 'react'

function MarksList(props) {
     /*let english = 99;
      english = 92;
      english = 97;
      const hindi = 90;*/
      let telugu = Number(props.tel);
      let hindi = Number(props.hin);
      let english = Number(props.eng);
      let maths = Number(props.math);
      let science = Number(props.sci);
      let social= Number(props.soc);
      let totalmarks = telugu +hindi + english +maths + science+ social;
      let perc = (totalmarks/600)*100;
      
     
     
  return (
    <div>
      <table>
        <caption><strong>{props.name} 10th Marks</strong></caption>
        <thead>
            <tr>
                <th> Subject</th>
                <th>Max.Marka</th>
                <th>Obtained Marks</th>
                <th>Result</th>
                <th>Remark</th>
            </tr>
        </thead>
        <tbody>
        <tr>
             <th>Telugu</th>
             <td>100</td>
             <td>{telugu}</td>
             <td>{telugu>=40 ? "Pass": "Fail"}</td>
             <td>{telugu>=40 ? "good": "bad"}</td>
        </tr>
        <tr>
             <th>Hindi</th>
             <td>100</td>
             <td>{hindi}</td>
             <td>{hindi>=40 ? "Pass": "Fail"}</td>
             <td>{hindi>=40 ? "good": "bad"}</td>
        </tr>
        <tr>
             <th>English</th>
             <td>100</td>
             <td>{english}</td>
             <td>{english>=40 ? "Pass": "Fail"}</td>
             <td>{english>=40 ? "good": "bad"}</td>
        </tr>
        <tr>
             <th>Maths</th>
             <td>100</td>
             <td>{maths}</td>
             <td>{maths>=40 ? "Pass": "Fail"}</td>
             <td>{maths>=40 ? "good": "bad"}</td>
        </tr>
        <tr>
             <th>Science</th>
             <td>100</td>
             <td>{science}</td>
             <td>{science>=40 ? "Pass": "Fail"}</td>
             <td>{science>=40 ? "good": "bad"}</td>
        </tr>
        <tr>
             <th>Social</th>
             <td>100</td>
             <td>{social}</td>
             <td>{social>=40 ? "Pass": "Fail"}</td>
             <td>{social>=40 ? "good": "bad"}</td>
        </tr>
            
        </tbody>
        <tfoot>
          <tr>
          <th>Total lmarks</th>
          <td>600</td>
          <td>{totalmarks}({perc.toFixed(2)}%)</td>
          <td></td>
          <td></td>
          </tr>
         
        </tfoot>
      </table>
    </div>
  )
}

export default MarksList
