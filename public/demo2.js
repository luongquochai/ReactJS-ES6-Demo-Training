class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hocVien :10
    }
  }
  render(){
    return(
      <div>
      <p>{this.props.txt}</p>

      <p>So hoc vien: {this.state.hocVien} </p>
      <button>xoa</button>
      </div>
    );
  }
}


ReactDOM.render(<Note txt="NodeJS"/>,
  document.getElementById('root'));
