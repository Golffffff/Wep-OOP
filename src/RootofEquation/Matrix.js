import React, { useState } from 'react'
import {Table,Button,Form,Container} from 'react-bootstrap'
import { create,all } from 'mathjs'
const math=create(all,{})


const Matrix = () => {

    const print= () =>{
        console.log(data)
        // setX(data.map((x)=>x.X))
        // setY(data.map((x)=>x.Y))
        return(
            <Container>
                <Table variant='dark'>
                    <thead>
                        <tr>
                            <th width='20%'>N</th>
                            <th width='40%'>X</th>
                            <th width='40%'>Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.Num}</td>
                                <td>{element.X}</td>
                                <td>{element.Y}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
            
        )
    }

    const setTable = (a,b,c) =>{
        var obj={}
        var testt=[];
        // var x = null
        // var y = null
        for(let i=0;i<c;i++){
            obj={
                Num:i+1,
                X:i+1,
                Y:(Math.random()*b).toFixed(0)
            }
            testt[i]=i+1;
            data.push(obj)
            
        }
        var sumx = data.reduce(((a,b)=> a+=b.X),0);
        console.log(sumx)
        var sumx2 = data.reduce(((a,b)=> a+=Math.pow(b.X,2)),0);
        console.log(sumx2)
        var sumy = data.reduce(((a,b)=>a+=Number(b.Y)),0);
        console.log(sumy)
        var sumxy = data.reduce(((a,b)=> a+=b.X*b.Y),0);
        console.log(sumxy)
        
        var rangex = [[c,sumx],[sumx,sumx2]]
        console.log(rangex)
        var rangey = [sumy,sumxy]
        console.log(rangey)

        var cal = math.lusolve(rangex,rangey)
        console.log(cal)

        setCal(cal)



        

        var ma = []
        ma.push(obj)
        // console.log(ma)



        

    }

    const data =[]  

    const [html,setHtml] = useState(null)
    const [x,setX] = useState("")
    const [y,setY] = useState()
    const [Cal,setCal] = useState([])
    const [n,setNum] = useState(0)

    const inputN =(event) =>{
        console.log(event.target.value)
        setNum(event.target.value)
    }
    const inputX = (event) =>{
        console.log(event.target.value)
        setX(event.target.value)
    }
    const inputY = (event) =>{
        console.log(event.target.value)
        setY(event.target.value)
    }
    const setValue = () =>{
        // const xnum = (x)
        // const ynum = (y)
        // const nnum = (n)
        // console.log(x)
        setTable(x,y,n)

        setHtml(print())
        
    }
  return (
    <Container>
        <Form>
            <h3>Matrix</h3>
            <Form.Group className='Matrix'>
                <Form.Label>Input n</Form.Label>
                <input type='number' id='n' placeholder='n' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputN}></input>
                <Form.Label>Input x</Form.Label>
                <input type='number' id='x' placeholder='x' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputX}></input>
                <Form.Label>Input y</Form.Label>
                <input type='number' id='y' placeholder='y' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputY}></input>
            </Form.Group>
            <br></br>
            <Button onClick={setValue}>Set</Button>
            <br></br>
            <h5>Answer is {Cal.map((a,b)=>"A"+b+" = "+a+" ")}</h5>
            <Container>
            {html}
            </Container>
        </Form>
    </Container>
  )
} 

export default Matrix