function ipv4Parser(ip, mask) {  
    
    function ipToInt(ip) {  
        return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;  
    }  

    
    function intToIp(int) {  
        return [  
            (int >>> 24) & 255,  
            (int >>> 16) & 255,  
            (int >>> 8) & 255,  
            int & 255  
        ].join('.');  
    }  

    const ipInt = ipToInt(ip); 
    const maskInt = ipToInt(mask); 

    
    const networkBlockInt = ipInt & maskInt;  

    
    const hostIdInt = ipInt & ~maskInt;  

      
    const networkBlock = intToIp(networkBlockInt);  
    const hostId = intToIp(hostIdInt);  

    return [networkBlock, hostId]; 
}  

 
const ip = "192.168.2.1";  
const subnetMask = "255.255.255.0";  

const [networkBlock, hostId] = ipv4Parser(ip, subnetMask);  
console.log(Сетевой блок: ${networkBlock}); 
console.log(Идентификатор хоста: ${hostId});   