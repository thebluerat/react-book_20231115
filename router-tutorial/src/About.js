import React from 'react';
import {useLocation} from 'react-router-dom';
import qs from 'qs';
// yarn add qs
// url 쿼리 사용하기

const About =()=> {
    const query = qs.parse(useLocation().search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결괏값은 문자열이다.

    return(
        <>
            <div>
                <h1>소개</h1>
                <p>이 프로젝트는 리액트 라우터 기초를 실습하려구,,</p>
                {showDetail && <p>detail 값을 true로 설정하셨군요</p>}
            </div>
        </>
    )
}

export default About;