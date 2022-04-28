import React from 'react';
import axios from 'axios';

class AxiosTest extends React.Component {
    getData = () => {
        axios
        // .get('http://localhost:9090/ajax/test?data=test')//STS에서 만들어둔 주소.
        // .get('http://yts-proxy.now.sh/list_movies.json') //통신성공
        //package.json에서 proxy 추가 후
        .get('/ajax/test?data=test')//STS에서 만들어둔 주소.
        .then((res) =>{
            console.log('통신성공');
            console.log(res);
        })
        .catch((err) => {
            console.log('통신실패');
            console.log(err);
        });
    };
	render(){
        return(
            <div>
                <h1>React 화면 테스트</h1>
                <button type='button' onClick={this.getData}>
                    클릭 시 서버와 통신
                </button>
            </div>
        );
    }
}
export default AxiosTest;