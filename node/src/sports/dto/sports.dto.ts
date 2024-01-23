// 数据提供者
// 数据库: DB = database
// 前端:   FE = frontend
// 后端:   BE = backend

// 前端查询球场信息传来的数据
export interface FE_getSportsDto {
    type: string;
    time: string;
    date: string;
}

// 前端请求预约球场传来的数据
export interface FE_postSportsDto {
    account: string;
    date: string;
    time: string;
    type: string;
    court: string;
    location: string;
    collaborative: string;
    number: string;
}

// 后端处理之后传回前端的数据
export interface BE_filterSportsDto {
    sportsType: string;
    sportsCourt: string;
    date: string;
    time: string[];
    location: string[];
}

// 数据库查询出来的数据
export interface DB_resultSportsDto {
    account: string;
    date: string;
    time: string;
    type: string;
    court: string;
    location: string;
    collaborative: string;
    number: string;
}

// 后端处理时的临时合并数据
export interface BE_mergedSportsDto {
    time: string;
    location: string;
}