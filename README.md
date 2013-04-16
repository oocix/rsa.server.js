#### 演示地址（前端是Nginx，路径转发到127.0.0.1的33922端口）

http://demo.uuland.org/~rsa/

#### 参数列表

* exponent
* modulus
* string
* format

#### 参数说明

**exponent**

公钥的指数

**modulus**

公钥的系数

**string**

待加密的字符串

**format**（可选）

当format为base64时会将结果进行Base64编码，否则将返回Hex数据

#### 调用示例

http://demo.uuland.org/~rsa/query?string=moyo&exponent=10001&modulus=C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41&format=base64