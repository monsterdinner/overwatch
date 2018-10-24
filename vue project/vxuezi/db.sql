#db.sql项目数据库脚本文件

#1:创建库    web1806
#2:进入      web1806
#3:创建用户名 xz_user

SET NAMES UTF8;
#DROP DATABASE IF EXISTS web1806;
CREATE DATABASE web1806 CHARSET=utf8;
USE web1806;
#建议:用户密码8位以上有字幕(有大写;小写;数字;特效字符)
CREATE TABLE xz_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);

INSERT INTO xz_user VALUES(NULL,'tom',md5('123'));
INSERT INTO xz_user VALUES(NULL,'dongdong',md5('123'));
INSERT INTO xz_user VALUES(NULL,'jerry',md5('123'));

#功能一:登录(对数据库查询操作)
SELECT * FROM xz_user
WHERE uname='tom' AND upwd =md5('123');
#建议
SELECT count(uid) AS c FROM xz_user
WHERE uname='tom' AND upwd=md5('123');


CREATE TABLE xz_imagelist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50)
);
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner1.png','图片1');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner2.png','图片2');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner3.png','图片3');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner4.png','图片4');

SELECT id,img_url,title FROM xz_imagelist;

#新闻表 id title ctime click img_url price
#(1)货币数据要求不能任何出差，金融行业
#price INT 单位分 100.50 ->10050
#(2)为了提高数据健壮性[添加冗余列mid;mtime]
#i1 int,i2 int,v1 varchar,v2 varchar
#防止1 2年后，系统升级，为xz_news 添加2列
#对系统影响比较小
#muid 修改数据用户编号 mtime修改时间

#                    [添加删除历史记录表]
#xz_user(uid,uname,upwd) xz_h_user(uid,uname,upwd)
#[删除用户]       ->INSERT INTO 

CREATE TABLE xz_news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content VARCHAR(2000),
    click INT,
    img_url VARCHAR(255),
    price  DECIMAL(10,2),
    ctime DATETIME
);

INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());

#添加一个新列在原来表中
#ALTER TABLE xz_news ADD v1 INT;

#xz_comment id nid ctime content user_name isdel[1:0]
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  ctime DATETIME,
  content VARCHAR(50),
  username VARCHAR(25),
  isdel INT
);
INSERT INTO xz_comment VALUES(null,1,now(),'111','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'112','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'113','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'114','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'115','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'116','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'117','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'118','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'119','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1101','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1111','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1112','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1113','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1124','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1132','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'114252','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'11522','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'11613','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'117116','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'118221','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'119441','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1101441','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1111215','wh',0);
INSERT INTO xz_comment VALUES(null,1,now(),'1112664','wh',0);