class TValsShowHide{
	constructor(){
		this.cons=0;
		this.doc=0;
		this.file=0;
	}
}


/*class Arr2DSize{
	constructor(){
		this.QExtRows=0;
		this.IneRowsLengthes=null;
		this.QIneRows=0;
	}
	static transformExtRowN(extRowNIni, QExtRows){
		if(extRowNIni<QExtRows){
			extRowN=extRowNIni+QExtRows;
		}else{
			extRowN=extRowNIni;
		}
		return extRowN;
	}
	setNull(){
		this.QExtRows=0;
		this.IneRowsLengthes=null;
		this.QIneRows=0;
	}
	setOne(isRect=true){
		this.QExtRows=0;
		if(isRect){
			this.IneRowsLengthes=null;
		}
		this.QIneRows=1;
	}
	getQExtRows(){
		return this.QExtRows;
	}
	getQIneRows(){
		return this.QIneRows;
	}
	getLength(extRowNExt){
		let L=0, extRowN=Arr2DSize.transformExtRowN(extRowNExt, this.QExtRows);
		if(extRowN>=1 && extRowN<this.QExtRows){
			if(this.IneRowsLengthes!=null){
				L=this.IneRowsLengthes[extRowN-1];
			}
		}
	}
	getLengthMin(){
		let minL, maxL, curL;
		
	
	}
}*/


//
	function procArr1D_setLength(data, L, dflt=0){
		let Q=data.length, LToDel=0;
		if(L>=1){
			if(Q<L){
				for(let i=Q+1; i<=L; i++){
					data=procArr1D_add(data, dflt);
				}
			}else if(L<Q){
				LToDel=Q-L+1;
				data=procArr1D_del(data, L+1, LToDel);
			}
		}
		return data;
	}
	
	function procArr1D_swap(data, N1, N2){
		let Q=data.length;
		if(N1>=1 && N1<=Q && N1>=1 && N2<=Q){
			let buf=data[N1-1];
			data[N1-1]=data[N2-1];
			data[N2-1]=buf;
		}
		return data;
	}
	function procArr1D_add(data, val){
		data.push(val);
		return data;
	}
	function procArr1D_ins1(data, val, N, vsh=0){//doesn't change array-param
		if(vsh==1){
			document.write("ins starts working"+"<br>");
		}
		let data1=data.slice(), data2;
		if(vsh==1){
			document.write("copy: "+procArr1D_toString(data1)+"<br>");
		}
		data2=data1.splice(N-1, 0, val);
		if(vsh==1){
			document.write("copy af splice: "+procArr1D_toString(data1)+"<br>");
			document.write("answer: "+procArr1D_toString(data2)+"<br>");
		}
		return data2;
	}
	function procArr1D_ins2(data, val, N){//changes array-param, no need to return
		return data.splice(N-1, 0, val);;
	}
	function procArr1D_ins(data, val, N, vsh=0){//no splice used, changes array-param
		let Q=data.length;
		if(vsh==1){
			document.write("ins starts working"+"<br>");
			console.log("ins starts working"+"<br>");
			document.write("Array1D bef ins: "+procArr1D_toString(data)+" val to ins: "+String(val)+" to pos: "+String(N)+"<br>");
			console.log   ("Array1D bef ins: "+procArr1D_toString(data)+" val to ins: "+String(val)+" to pos: "+String(N)+"<br>");
		}
		data.push(val);
		if(vsh==1){
			document.write("Array1D af add instead of ins: "+procArr1D_toString(data)+"<br>");
			console.log   ("Array1D af add instead of ins: "+procArr1D_toString(data)+"<br>");
		}
		Q=data.length;
		if(N>=1 && N<=Q){
			for(let i=Q-1; i>=N; i--){
				procArr1D_swap(data, i+1, i);
				if(vsh==1){
					document.write(String(i)+") val["+String(i)+"]="+String(data[i+1-1])+" val["+String(i+1)+"]="+String(data[i-1])+" Array1D now :" +procArr1D_toString(data)+"<br>");
					console.log   (String(i)+") val["+String(i)+"]="+String(data[i+1-1])+" val["+String(i+1)+"]="+String(data[i-1])+" Array1D now :" +procArr1D_toString(data)+"<br>");
				}
			}
		}
		if(vsh==1){
			document.write("ins finishes working"+"<br>");
			console.log("ins finishes working"+"<br>");
		}
		return data;
	}
	//function procArr1D_del1(dataExt, N=0, L=1){
	//	let Q=dataExt.length;
	//	let data=procArr1D_getSubArr(dataExt);
	//	if(N==0){
	//		N=Q;
	//	}
	//	if(Array.isArray(data) && Q>0 && N>=1 && N<=Q){
	//		delete[]
	//	}
	//}
	function procArr1D_del(data, N=0, L=1){
		let Q=data.length;
		if(Array.isArray(data) && Q>0){
			if(N<1){
				N=Q;
			}
			var removed=data.splice(N-1, L);
		}
		return data;
	}
	function procArr1D_setN(data, val, N){
		if(Array.isArray(data) && N>=1 && N<=Q){
			data[N-1]=val;
		}
	}
	function procArr1D_reverse(data, vsh=0){
		let Q=data.length, N=0, N2=0;
		if(vsh==1){
			document.write("reverse starts working<br>");
		}
		if(Array.isArray(data)){
			Q=data.length;
			if(Q>0){
				if( Q % 2 ==0){
					if(vsh==1){
						document.write("Q="+String(Q)+" - evan <br>");
					}
					N=Q/2;
				}else{
					N=(Q-1)/2;
					if(vsh==1){
						document.write("Q="+String(Q)+" - odd <br>");
					}
				}
				for(let N1=1; N1<=N; N1++){
					N2=Q-N1+1;
					data=procArr1D_swap(data, N1, N2);
					if(vsh==1){
						document.write(String(N1)+") val["+String(N1)+"]="+String(data[N2-1])+" val["+String(N2)+"]="+String(data[N1-1])+" Array1D now :" +data.toString()+"<br>");
					}
				}
			}
		}
		if(vsh==1){
			document.write(" Array1D now :" +datatoString()+"<br>");
			document.write("reverse finishes working<br>");
		}
	}
	function procArr1D_valIsAtPos(data, what, N){
		let b=false;
		if(Array.isArray(data) && data.length>0 && data[N-1]===what){//or ===?
			b=true;
		}
		return b;
	}
	function procArr1D_subArrIsAtPos(data, what, N){
		let b=false;
		let QExt=1, Q=data.length, NIne=0;
		if(Array.isArray(data)){
			b=true;
			if(Array.isArray(what)){
				QExt=what.length;
				if((N+QExt-1)<=Q){
					for(let i=1; i<=QExt; i++){
						NIne=N+i-1;
						if(data[NIne-1]!=what[i-1]){
							b=false;
						}
					}
				}
			}else{
				if(data[N-1]!=what){
					b=false;
				}
			}
		}
		return b;
	}
	function procArr1D_findVal(dataExt, val, FromN=1, ToN=0){
		let found=[];
		let data=[];
		if(Array.isArray(dataExt)){
			data=dataExt;
		}else{
			data.push(dataExt);
		}
		if(ToN==0 || ToN<FromN){
			ToN=data.length;
		}
		for(let i=FromN; i<=ToN; i++){
			if(procArr1D_valIsAtPos(data, val, i)){
				found.push(i);
			}
		}
		return found
	}
	function procArr1D_findSubArr(dataExt, subArrExt, FromN=1, ToN=0, vsh=0){
		//let found=[];
		let found=[];//new Array1D();
		let data=[], subArr=[];
		if(Array.isArray(subArrExt)){
			subArr=subArrExt;
		}else{
			subArr.push(subArrExt);
		}
		if(Array.isArray(dataExt)){
			data=dataExt;
		}else{
			data.push(dataExt);
		}
		let lastN=0;
		let isAtPos=true;
		let QOwn=data.length, QExt=subArr.length;
		if(vsh==1){
			document.write("findSubArr starts working<br>");
			document.write("in: "+procArr1D_toString(data)+"<br>");
			document.write("what: "+procArr1D_toString(subArr)+"<br>");
		}
		if(ToN==0 || ToN<FromN){
			ToN=data.length;
		}
		//if(FromN<ToN){
		//	FromN=1;
		//}
		if(FromN+QExt-1<=QOwn){
			lastN=QOwn-QExt+1;
			if(lastN<ToN){
				ToN=lastN;
			}
			for(let i=FromN; i<=ToN; i++){
				isAtPos=procArr1D_subArrIsAtPos(data, subArr, i);
				if(vsh==1){
					document.write(String(i)+") content: ");
					for(let j=i; j<=i+QExt-1; j++){
						document.write(String(data[j-1])+" ");
					}
					document.write(String(i)+") sought: ");
					for(let j=1; j<=QExt; j++){
						document.write(String(subArr[j-1])+" ");
					}
					document.write("<br>");
				}
				if(isAtPos){
					found.push(i);
					if(vsh==1){
						document.write("found at this pos<br>");
					}
				}else{
					if(vsh==1){
						document.write("not found at this pos<br>");
					}
				}
			}
		}
		if(vsh==1){
			document.write("found"+procArr1D_toString(found)+"<br>");
			document.write("findSubArr finishes working<br>");
		}
		return found;
	}
	function procArr1D_replaceVal(dataExt, what, withWhat, FromN=1, ToN=0, vsh=0){
		let data=[];
		if(Array.isArray(dataExt)){
			data=dataExt;
		}else{
			data.push(dataExt);
		}
		if(vsh==1){
			document.write("replaceVal starts working<br>");
			document.write("ini arr: "+data.toString()+"<br>");
			document.write("replace: "+String(what)+" with: "+String(withWhat)+"<br>");
		}
		let poss=procArr1D_findVal(data, what, FromN, ToN);//in class method analog'l 
		let count=poss.length, N=0;
		if(vsh==1){
			document.write(String(what)+" found "+String(count)+" times at: "+poss.toString()+"<br>");//I ne ved qak ce work
		}
		for(let i=1; i<=count; i++){
			N=poss[i-1];
			if(vsh==1){
				document.write(String(N)+")  val["+String(i)+"]="+String(data[i-1]));
			}
			data=procArr1D_del(data, N);
			if(vsh==1){
				document.write(" DEL:  Array1D now :" +data.toString());
			}
			data=procArr1D_ins(data, withWhat, N, vsh);
			if(vsh==1){
				document.write("  del and ins: Array1D now :" +data.toString()+"<br>");
			}
		}
		//return data;
	}
	function procArr1D_replaceSubArr(dataExt, whatExt, withWhatExt, FromN=1, ToN=0, vsh=0){
		let what=[], withWhat=[], data=[];
		if(Array.isArray(dataExt)){
			data=dataExt;
		}else{
			data.push(dataExt);
		}
		if(Array.isArray(whatExt)){
			what=whatExt;
		}else{
			what.push(whatExt);
		}
		if(Array.isArray(withWhatExt)){
			withWhat=withWhatExt;
		}else{
			withWhat.push(withWhatExt);
		}
		if(vsh==1){
			document.write("replaceSubArr starts working<br>");
			document.write("ini arr: "+data.toString()+"<br>");
			document.write("replace: "+String(what)+" with: "+String(withWhat)+"<br>");
		}
		poss=procArr1D_findSubArr(data, what, FromN, ToN);
		//let count=poss.length, N=0;
		let count=poss.length, N=0;
		if(vsh==1){
			document.write(String(what)+" found "+String(count)+" times at: "+poss.toString()+"<br>");
		}
		for(let i=count; i>=1; i--){//vikt! ne VV!
			N=poss[i-1];
			if(vsh==1){
				document.write(String(N)+")  val["+String(i)+"]="+String(data[i-1]));
			}
			for(let j=1; j<=what.length; j++){
				data=procArr1D_del(data, N);
			}
			for(let j=1; j<=withWhat.length; j++){
				data=procArr1D_ins(data, withWhat[j-1], N+j-1);
			}
			if(vsh==1){
				document.write(String(N)+")  Array1D now :" +data.toString()+"<br>");
			}
		}
		if(vsh==1){
			document.write("replaceSubArr finishes working<br>");
		}
		return data;
	}
	function procArr1D_getSubArr(dataExt, N1=1, N2=0, dflt=0){
		let R=[];
		let Q=0
		let bufN;
		let data=[];
		Q=dataExt.length;
		if(Array.isArray(dataExt)){
			//data=dataExt;
			for(let i=1; i<=Q; i++){
				data.push(dataExt[i-1]);
			}
		}else{
			data.push(dataExt);
		}
		Q=data.length;
		if(N2<=0){
			N2=Q;
		}
		if(N1<1){
			for(let i=N1; i<=1-1; i++){
				R.push(dflt);
			}
			N1=1;
		}
		if(N1>N2){
			buf=N1;
			N1=N2;
			N2=buf;
		}
		if(N1<=Q && N2>=1){
			if(N2<=Q){
				for(let i=N1; i<=N2; i++){
					R.push(data[i-1]);
				}
			}else{
				for(let i=N1; i<=Q; i++){
					R.push(data[i-1]);
				}
			}
			if(N2>Q){
				for(let i=Q+1; i<=N2; i++){
					R.push(dflt);
				}
			}
		}
		return R;
	}
	function getSubarrayBySliceNatural(arr, pos1=1, pos2=0){
        let N1, N2, R=[];
        if(pos1==0){
            N1=1;
        }else{
            N1 = pos1>0 ? pos1 : arr.length+pos1+1;
        }
        if(pos2==0){
            N2=arr.length;
		}else{
            N2 = pos2>0 ? pos2 : arr.length+pos2+1;
        }
        //console.log('N1='+N1+' N2='+N2);
        if(N1<=N2){
            //console.log(N1+' <='+N2);
            for(let i=N1; i<=N2; i++){
                R.push(arr[i-1]);
                //console.log(i+') '+this[i-1]);
            }
        }else{
            //console.log(N1+' >'+N2);
            for(let i=N1; i>=N2; i--){
                R.push(arr[i-1]);
                //console.log(i+') '+this[i-1]);
            }
        }
        return R;
    }
	function procArr1D_toString(data, sep=" "){
		let s="";
		let Q=data.length;
		if(Q>0){
			for(let i=1; i<=Q-1; i++){
				s=s+String(data[i-1]);
				s=s+sep;
			}
			s=s+String(data[Q-1]);
		}
		return s;
	}//fn
	function procArr1D_toStringArray(data){//New!
		let s;
		let R=new Array();
		let Q=data.length;
		if(Q>0){
			for(let i=1; i<=Q-1; i++){
				s=String(data[i-1]);
				R.push(s);
			}
		}
		return R;
	}//fn
	function procArr1D_ModifyNewStringValToUnique(arr, val, N=0, befN="_N", aftN="", vsh=0){
		let R, cur=val, found, contin=true;
		let L=Array.length(arr);
		if(L>0){
			if(N<=0 || N>=L){
				N=L+1;
			}
			found=procArr1D_findVal(arr, cur);
			if(found.length==0){
				contin=false;
			}
			while(contin){
				cur=cur+befN;
				cur=cur+String(N);
				cur=cur+aftN;
				found=procArr1D_findVal(arr, cur);
				if(found.length==0){
					contin=false;
				}
			}
		}
		return cur;
	}
//
	
function  StringToStringArray(str){
	let R=[];
	let L=0;
	let ch;
	//if(Array.isArray(str)){
	//	L=Array.length(str);
	//	for(let i=1; i<=L; i++){
	//		ch=String(str[i-1]);
	//		R.push(ch);
	//	}
	//}else{
	//	str=String(str);
	//	L=String.length(str);
	//	for(let i=1; i<=L; i++){
	//		ch=String.splice(i-1, 1);
	//		R.push(ch);
	//	}
	//}
	str=String(str);
	L=String.length(str);
	for(let i=1; i<=L; i++){
		ch=String.splice(i-1, 1);
		R.push(ch);
	}
	return R;
}


//

function procArr1D_toString(data, sep=" "){
	let s="";
	let Q=data.length;
	if(Q>0){
		for(let i=1; i<=Q-1; i++){
			s=s+String(data[i-1]);
			s=s+sep;
		}
		s=s+String(data[Q-1]);
	}
	return s;
}//fn
function procArr1D_toStringArray(data){//New!
	let s;
	let R=new Array();
	let Q=data.length;
	if(Q>0){
		for(let i=1; i<=Q; i++){
			s=String(data[i-1]);
			R.push(s);
		}
	}
	return R;
}//fn
function procArr1D_ModifyNewStringValToUnique(arr, val, N=0, befN="", aftN="", vsh=0){
	let R, cur=val, found ;
	let L=arr.length;//L=Array.length(arr);
	let contin=true;
	if(L>0){
		if(N<=0 || N>=L){
			N=L+1;
		}
		found=procArr1D_findVal(arr, cur);
			if(found.length==0){
				contin=false;
			}
		while(contin){
			cur=cur+befN;
			cur=cur+String(N);
			cur=cur+aftN;
			found=procArr1D_findVal(arr, cur);
			if(found.length==0){
				contin=false;
			}
		}
	}
	return cur;
}
//
/*function procArr2D_SetFrom1D(arr1D, RowExt0Ine1=0){
	let arr2D=[];
	let row=[];
	if(RowExt0Ine1==0){
		arr2D.push(arr1D);
	}else{
		for(let i=1; i<=arr1D.length; i++){
			row.push(arr1D[i-1]);
			arr2D.push(row);
			row.clear();
		}
	}
	return arr2D;
}

function procArr2D_toString(arr2D, sep_InRow=", ", sep_btwRows="; "){
	let s="";
	let Q=arr2D.length, L;
	for(let i=1; i<=Q; i++){
		L=arr2D[i-1].length;
		for(let j=1; j<=L-1; j++){
			s=s+String(arr2D[i-1][j-1]);
			s=s+sep_InRow;
		}
		s=s+String(arr2D[i-1][L-1]);
		s=s+sep_btwRows;
	}
}*/


function  StringToStringArray(str, vsh=0){
	let R=[];
	let L=0;
	let ch;

	if(vsh==1){
		document.write('StringToStringArray starts working');
	}
	str=String(str);
	//L=String.length(str);//error: String.length s' ne fn
	L=str.length;
	if(vsh==1){
		document.writeln('String:'+str+" has length="+String(L));
	}
	for(let i=1; i<=L; i++){
		ch=str.slice(i-1, i+1-1);
		R.push(ch);
		if(vsh==1){
			document.writeln(i+') '+ch+" -> "+String(R));
		}	
	}
	if(vsh==1){
		document.writeln('StringToStringArray finishes working');
	}
	return R;
}

function getMaskedArrayAllowedPart(longArray, mask){
	let Larr, Lmsk, Lmin;
	let shortArray=[];
	let possibleToWork;
	Larr=longArray.length;
	Lmsk=mask.length;
	Lmin=Larr<=Lmsk?Larr:Lmsk;
	possibleToWork=(Lmin>0);
	if(possibleToWork){
		for(let i=1; i<=Lmin; i++){
			if(!((mask[i-1]==0) || (mask[i-1]==1))){
				possibleToWork=false;
			}
		}
		if(possibleToWork){
			for(let i=1; i<=Lmin; i++){
				if(mask[i-1]==1){
					shortArray.push(longArray[i-1]);
				}
			}
		}
	}
	return shortArray;
}
function writeAllowedValsToMaskedArray(longArray, shortArray, mask, vsh){
	let R=[];
	let Llng, Lkrt, Lmsk, Lmin;
	let possibleToWork;
	countOnes=0;
	Llng=longArray.length;
	Lkrt=shortArray.length;
	Lmsk=mask.length;
	//Lmin=Larr<=Lmsk?Larr:Lmsk;
	if(vsh==1) console.log('writeAllowedValsToMaskedArray starts working');
	possibleToWork=(Lmsk>0 && Llng==Lmsk);
	if(vsh==1) console.log(' Lmsk='+String(Lmsk)+' Llng='+String(Llng)+"Possible to work: "+String(possibleToWork));
	if(possibleToWork){
		for(let i=1; i<=Lmsk; i++){
			if(!((mask[i-1]==0) || (mask[i-1]==1))){
				possibleToWork=false;
				if(vsh==1) console.log('Mask val error: '+String(mask[i-1])+'!=0, !=1');
			}
			if(mask[i-1]==1){
				countOnes++;
			}
		}
		if(vsh==1){
			if(countOnes!=Lkrt){
				console.log('Mask length error: Q of \'1\'s != L(ArrKrt) '+String(countOnes)+'!='+String(Lkrt));
			}else{
				console.log('Mask length norm: Q of \'1\'s == L(ArrKrt) '+String(countOnes)+'=='+String(Lkrt));	
			}
		}
		possibleToWork=possibleToWork && (countOnes==Lkrt);
		if(possibleToWork){
			if(vsh==1) console.log('Possible to work ');
			countOnes=0;
			for(let i=1; i<=Lmsk; i++){
				if(mask[i-1]==1){
					countOnes++;
					R.push(shortArray[countOnes-1]);
					if(vsh==1) console.log('i=: '+String(i)+' countOnes='+String(countOnes)+' val='+String(mask[i-1]));
				}else{
					R.push(longArray[i-1]);
					if(vsh==1) console.log('i=: '+String(i)+' prev val='+String(mask[i-1]));
				}
			}
			if(vsh==1) console.log('Impossible to work ');
		}
	}
	if(vsh==1) console.log('writeAllowedValsToMaskedArray finishes working');
	return R;
}
function procArr1D_Sort(arr1D, cbf_vcur_vnext_index_arr=null){
	const L=arr1D.length, buf;
	if(cbf_vcur_vnext_index_arr!=null){
		for(let i=1; i<=L-1; i++){
			for(let j=i; j<=L; j++){
				if(cbf_vcur_vnext_index_arr(arr1D[i-1], arr1D[j-1])){
					buf=arr1D[i-1];
					arr1D[i-1]=arr2D[j-1];
					arr1D[j-1]=buf;
				}
			}
		}
	}else{
		for(let i=1; i<=L-1; i++){
			for(let j=i; j<=L; j++){
				if(arr1D[j-1]<arr1D[i-1]){
					buf=arr1D[i-1];
					arr1D[i-1]=arr1D[j-1];
					arr1D[j-1]=buf;
				}
			}
		}
	}
}
//=============================================================================================================
function procArr2D_SetFrom1DArray(arr1D, RowIneNotExt=false){
	let arr2D=[], curRow=[], L;
	if(Array.isArray(arr1D)){
		L=arr1D.length;
		if(RowIneNotExt){
			for(let i=1; i<=L; i++){
				row.push(arr1D[i-1]);
				arr2D.push(row);
				row.clear();
			}
		}else{
			for(let i=1; i<=L; i++){
				row.push(arr1D[i-1]);
			}
			arr2D.push(row);
			row.clear();
		}
	}else{
		row.push(arr1D);
		arr2D.push(row);
	}
	return arr2D;
}
function procArr2D_getQExtRows(arr2D){
	return arr2D.length;
}
function procArr2D_getLength(arr2D, rowN){
	const Q=arr2D.length, LN=0;
	if(rowN>=1 && rowN<=Q){
		LN=arr2D[rowN-1].length;
	}
	return LN;
}
function procArr2D_getLengthesAll(arr2D){
	const Q=arr2D.length, LA=[];
	for(let i=1; i<=L; i++){
		LA.push(arr2D[i-1].length);
	}
	return LA;
}
function procArr2D_getLengthMin(arr2D){
	const Q=arr2D.length, Lmin=0, Lmax=0, Lcur;
	for(let i=1; i<=L; i++){
		if((i==1)|| (i>1 && Lcur<Lmin)){
			Lmin=Lcur;
		}
		if((i==1)|| (i>1 && Lcur>Lmax)){
			Lmax=Lcur;
		}
	}
	return Lmin;
}
function procArr2D_getLengthMax(arr2D){
	const Q=arr2D.length, Lmin=0, Lmax=0, Lcur;
	for(let i=1; i<=L; i++){
		Lcur=arr2D[i-1].length;
		if((i==1)|| (i>1 && Lcur<Lmin)){
			Lmin=Lcur;
		}
		if((i==1)|| (i>1 && Lcur>Lmax)){
			Lmax=Lcur;
		}
	}
	return Lmax;
}
//
function procArr2D_setSize(arr2D, QExtRows, IneRowsSize=1, dfltVal=0){
	const QExtRowsWas=procArr2D_getQExtRows(arr2D),
	      IneRowsSizeWas=procArr2D_getLengthesAll(arr2D),
		  LminWas=procArr2D_getLengthMin(arr2D),
		  LmaxWas=procArr2D_getLengthMax(arr2D),
		  Lmin, Lmax, Lcur, LcurWas,
		  QExtRowsMin, IneRowLengthMin, IneRowLengthMax,
		  curRow;
	QExtRowsMin = QExtRowsWas <= QExtRows ? QExtRowsWas : QExtRows;
	if(Array.isArray(IneRowsSize){
		for(let i=1; i<=IneRowsSize.length; i++){
			if(i==1 || (i>1 && IneRowsSize[i-1]<Lmin))
			{
				Lmin=IneRowsSize[i-1];
			}
			if(i==1 || (i>1 && IneRowsSize[i-1]>Lmax))
			{
				Lmax=IneRowsSize[i-1];
			}
		if(IneRowsSize.length<QExtRows){
			for(let i=IneRowsSize.length+1; i<=QExtRows; i++){
				IneRowsSize.push(Lmin);
			}
		}
		//
		if(QExtRows>QExtRowsWas){
			for(let i=1; i<=QExtRowsWas; i++){
				LcurWas=arr2D[i-1].length;
				Lcur=IneRowsSize[i-1];
				IneRowLengthMin = LcurWas <= Lcur ? LcurWas : Lcur;
				IneRowLengthMax = LcurWas >= Lcur ? LcurWas : Lcur;
				if(Lcur<LcurWas){
					for(let j=LcurWas; j>=Lcur; j--){
						arr2D[i-1].pop();
					}
				}else if(Lcur>LcurWas){
					for(let j=LcurWas; j<=Lcur; j++){
						arr2D[i-1].push(dfltVal);
					}
				}
			}
			for(let i=QExtRowsWas+1; i<=QExtRows; i++){
				curRow=[];
				for(let j=1; j<=IneRowsSize[i-1]; j++){
					curRow.push(dfltVal);
				}
				arr2D.push(curRow);
			}
		}else{
			if(QExtRows<QExtRowsWas){
				for(let i=QExtRowsWas; i>=QExtRows; i--){
					ar2D.pop();
				}
			}
			for(let i=1; i<=QExtRows; i++){
				LcurWas=arr2D[i-1].length;
				Lcur=IneRowsSize[i-1];
				if(Lcur<LcurWas){
					for(let j=LcurWas; j>=Lcur; j--){
						arr2D[i-1].pop();
					}
				}else if(Lcur>LcurWas){
					for(let j=LcurWas; j<=Lcur; j++){
						arr2D[i-1].push(dfltVal);
					}
				}
			}
		}
	}else{
		if(QExtRows>QExtRowsWas){
			for(let i=1; i<=QExtRowsWas; i++){
				LcurWas=arr2D[i-1].length;
				Lcur=IneRowsSize;
				if(Lcur<LcurWas){
					for(let j=LcurWas; j>=Lcur; j--){
						arr2D[i-1].pop();
					}
				}else if(Lcur>LcurWas){
					for(let j=LcurWas; j<=Lcur; j++){
						arr2D[i-1].push(dfltVal);
					}
				}
			}
			for(let i=QExtRowsWas+1; i<=QExtRows; i++){
				curRow=[];
				for(let j=1; j<=IneRowsSize; j++){
					curRow.push(dfltVal);
				}
				arr2D.push(curRow);
			}
		}else{
			if(QExtRows<QExtRowsWas){
				for(let i=QExtRowsWas; i>=QExtRows; i--){
					ar2D.pop();
				}
			}
			for(let i=1; i<=QExtRows; i++){
				LcurWas=arr2D[i-1].length;
				Lcur=IneRowsSize;
				if(Lcur<LcurWas){
					for(let j=LcurWas; j>=Lcur; j--){
						arr2D[i-1].pop();
					}
				}else if(Lcur>LcurWas){
					for(let j=LcurWas; j<=Lcur; j++){
						arr2D[i-1].push(dfltVal);
					}
				}
			}
		}
	}
}//fn
function procArr2D_setLengthN(N, L, dfltVal=0){
	let Lwas;
	if(N>=1 && N<=arr2D.length){
		Lwas=arr2S[N-1].length;
		if(Lwas<L){
			for(let i=Lwas+1; i<=L; i++){
				arr2D[N-1].push(dfltVal);
			}
		}else if(Lwas<L){
			for(let i=L; i>=Lwas; i--){
				arr2D[N-1].pop();
			}
		}
	}
}
function procArr2D_makeRect(arr2D, L_max0MinMinus1){
	if(L_max0MinMinus1==-1){
		L_max0MinMinus1=procArr2D_getLengthMin(arr2D);
	}else if(L_max0MinMinus1==0){
		L_max0MinMinus1=procArr2D_getLengthMax(arr2D);
	}else if(L_max0MinMinus1>0 && L_max0MinMinus1<=36550){
		procArr2D_setSize(arr2D, procArr2D_getQExtRows(arr2D), L_max0MinMinus1);
	}
}
//
function procArr2D_swapElements(Element1extRowN, Element1ineRowN, Element2extRowN, Element2ineRowN){
	let Q=arr2D.length, L1, L2, N1, N2, buf;
	if(Element1extRowN>=1 && Element1extRowN<=Q && Element2extRowN>=1 && Element2extRowN<=Q){
		L1=arr2D[Element1extRowN-1].length;
		L2=arr2D[Element2extRowN-1].length;
		if(Element1ineRowN<0){
			N1=L1+Element1ineRowN;
		}
		if(Element2ineRowN<0){
			N2=L2+Element2ineRowN;
		}
		if(N1>=1 && N1<=L1   && N2>=1 && N2<=L2){
			buf=arr2D[Element1extRowN-1][N1-1];
			arr2D[Element1extRowN-1][N1-1]=arr2D[Element2extRowN-1][N2-1];
			arr2D[Element2extRowN-1][N2-1]=buf;
		}
	}
}
function procArr2D_getElementAsLink(arr2D, extRowN, ineRowN){
	let R, L;
	if(extRowN>=1 && extRowN<=arr2D.length){
		L=arr2D[extRowN-1].length;
		if(ineRowN<0){
			ineRowN=L+ineRowN;
		}
		if(ineRowN>=1 && ineRowN<=L){
			R=arr2D[extRowN-1][ineRowN-1];
		}
	}
	return R;
}
// procArr2D_getElementAsCopy(arr2D, extRowN, ineRowN)

//
function procArr2D_getExtRowAsLink(arr2D, extRowN){
	let R=[], Q=arr2D.length;
	if(extRowN<0){
		extRowN=Q+extRowN;
	}
	if(extRowN>=1 && extRowN<=Q){
		R=arr2D[extRowN-1];
	}
	return R;
}
// procArr2D_getExtRowAsCopy
//
function procArr2D_setExtRow(arr2D, extRowN, data, dfltVal=0, lengthChangeAllowed=true){
	let row=[], Q=arr2D.length, LOld, LExt=row.length, LMin, LNew;
	if(extRowN<0){
		extRowN=Q+extRowN;
	}
	if(extRowN>=1 && extRowN<=Q){
		LOld=arr2D[extRowN-1].length;
		if(Array.isArray(data)){
			row=data;
			LExt=row.length;
			if(LExt==LOld || lengthChangeAllowed){
				LNew=LExt;
			}else{
				LNew=LOld;
			}
			LMin= LOld<= LExt ? LOld : LExt;
			for(let i=1; i<=LMin; i++){
				arr2D[i-1]=row[i-1];
			}
			if(LOld<LNew){
				for(let i=LMin+1; i<=LNew; i++){
					arr2D[i-1].push(row[i-1]);
				}
			}else if(LExt<LNew){
				for(let i=LMin+1; i<=LNew; i++){
					arr2D[i-1].push(dfltVal);
				}
			}
		}else{
			if(LOld>0){
				for(let i=1; i<=LOld; i++){
					row.push(data);
				}
			}else{
				row.push(data);
			}
			arr2D[extRowN-1]=row;
		}
	}
}//fn
//
// procArr2D_getIneRowAsLink//if possible
function procArr2D_getIneRowAsCopy(arr2D, ineRowN){
	let R=[], Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), Q=arr2.length;
	if(ineRowN>=1 && ineRowN<=Lmin){
		for(let i=1; i<=Q; i++){
			R.push(arr2D[i-1][ineRowN-1]);
		}
	}
	return R;
}
//
function procArr2D_setIneRow(arr2D, ineRowN, data, dfltVal=0){
	let row=[], Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), Q=arr2.length, LExt;
	if(!Array.isArray(data){
		for(let i=1; i<=Q; i++){
			arr2D[i-1][ineRowN-1]=data;
		}
	}else{
		LExt=data.length;
		if(LExt<Q){
			for(let i=1; i<=LExt; i++){
				arr2D[i-1][ineRowN-1]=data[i-1];
			}
			for(let i=LExt+1; i<=Q; i++){
				arr2D[i-1][ineRowN-1]=dfltVal;
			}
		}else{
			for(let i=1; i<=Q; i++){
				arr2D[i-1][ineRowN-1]=data[i-1];
			}
		}
	}
}//fn
//
function procArr2D_addExtRow(arr2D, data, dfltVal=0, notSameLengthAllowed=true){
	let row=[], Q, Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), LExt;
	if(Array.isArray(data)){
		row=data;
	else{
		row.push(data);
	}
	LExt=row.length;
	if(arr2D!=[]){
		Q=arr2D.length;
		if(Lmin==Lmax && !notSameLengthAllowed){
			if(LExt<Lmin){
				for(let i=LExt+1; i<=Lmin; i++){
					row.push(dfltVal);
				}
			}else if(LExt>Lmax){
				for(let i=LExt; i>=Lmax; i--){
					row.pop();
				}
			}
		}
	}
	arr2D.push(row);
}
function procArr2D_insExtRow(arr2D, data, extRowN, dfltVal=0, notSameLengthAllowed=true){
	let row=[], Q, Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), LExt;
	if(Array.isArray(data)){
		row=data;
	else{
		row.push(data);
	}
	LExt=row.length;
	//
	if(arr2D!=[]){
		Q=arr2.length;
		if(extRowN<0){
			extRowN+=Q;
		}
		if(extRowN>=1 && extRowN<=Q){
			if(Lmin==Lmax && !notSameLengthAllowed){
				if(LExt<Lmin){
					for(let i=LExt+1; i<=Lmin; i++){
						row.push(dfltVal);
					}
				}else if(LExt>Lmax){
					for(let i=LExt; i>=Lmax; i--){
						row.pop();
					}
				}
			}
			procArr1D_ins2(arr2D, row, extRowN);
		}
	}
}
function procArr2D_delExtRow(arr2D, extRowN){
	let Q=arr2D.length;
	if(arr2D!=[]){
		if(extRowN<0){
			extRowN+=Q;
		}
		if(extRowN>=1 && extRowN<=Q){
			procArr1D_del(arr2D, extRowN);
		}
	}
}
//
function procArr2D_addIneRow(arr2D, data, ineRowN, dfltVal=0, ifShort_Stretch_NotMakeTorn=true, ifTorn_Ignore0StretchToMax1AddToEachExtRow2=0){
	let row=[], Q, Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), LExt, LToAdd;
	const  L_max0MinMinus1=0;
	if(arr2D==[]){
		if(Array.isArray(data)){
			LExt=data.length;
			for(let i=1; i<=LExt; i++){
				row=[]];
				row.push(data[i-1]);
				arr2D.push(row);
			}
		}else{
			row.push(data);
			arr2D.push(row);
		}
	}else{
		if(Array.isArray(data){
			row=data;
		}else{
			row.push(data);
		}
		LExt=row.length;
		Q=arr2D.length;
		if(!(Lmin!=Lmax && ifTorn_Ignore0StretchToMax1AddToEachExtRow2!=0)){
			if(Lmin!=Lmax && ifTorn_Ignore0StretchToMax1AddToEachExtRow2==1){
				procArr2D_makeRect(arr2D, L_max0MinMinus1);
			}
			if(LExt<Q){
				if(ifShort_Stretch_NotMakeTorn){
					for(let i=LExt+1; i<=Q; i++){
						row.push(dfltVal);
					}
					LToAdd=row.length;//Q
				}else{
					LToAdd=LExt;
				}
			}else if(LExt>Q){
				for(let i=LExt; i>=Q; i--){
					row.pop();
				}
				LToAdd=row.length;//Q
			}
			for(let i=1; i<=LToAdd; i++){
				procArr1D_add(arr2D[i-1], row[i-1]);
			}
		}//if to do 			
	}//case empty or with existing data
}//fn
function procArr2D_insIneRow(arr2D, ineRowN, data, dfltVal=0){
	let row=[], Q, Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D), QExt;
	if(arr2D!=[] && ineRowN>=1 && ineRowN<=Lmin){
		Q=arr2D.length;
		if(Array.isArray(data)){
			QExt=data.length;
			if(QExt<Q){
				for(let i=1; i<=QExt; i++){
					row.push(data[i-1]);
				}
				for(let i=QExt+1; i<=Q; i++){
					row.push(dfltVal);
				}
			}else{
				for(let i=1; i<=Q ++){
					row.push(data);
				}
			}
		}else{
			for(let i=1; i<=Q ++){
				row.push(data);
			}
		}
		for(let i=1; i<=Q; i++){
			procArr1D_ins2(arr2D[i-1], row[i-1], ineRowN);
		}
	}//if to work
}//fn
function procArr2D_delIneRow(arr2D, ineRowN){
	let row=[], Q, Lmin=procArr2D_getLengthMin(arr2D), Lmax=procArr2D_getLengthMax(arr2D);
	const QDeleted=1;
	if(arr2D!=[] && ineRowN>=1 && ineRowN<=Lmin){
		for(let i=1; i<=Q; i++){
			procArr1D_del(data, ineRowN, QDeleted);
		}
	}
}
//
function procArr2D_addToExtRow(arr2D, extRowN, data){
	if(arr2D!=[] && ( (extRowN>=1 && extRowN<=arr2D.length)||(extRowN<0 && -extRowN<=arr2D.length ) ) ){
		if(extRowN<0){
			extRowN+=Q;
		}
		procArr1D_add(arr2D[extRowN-1], data);
	}
}	
function procArr2D_insToExtRow(arr2D, extRowN, posN, data){
	if(arr2D!=[] && ( (extRowN>=1 && extRowN<=arr2D.length)||(extRowN<0 && -extRowN<=arr2D.length ) ) ){
		if(extRowN<0){
			extRowN+=Q;
		}
		if((posN>=1 && posN<=arr2D[extRowN-1].length)||(posN<0 && -posN<=arr2D[extRowN-1].length)){
			if(posN<0){
				extRowN+=arr2D[extRowN-1].length;
			}
			//procArr1D_ins2(data, val, N)
			procArr1D_ins2(arr2D[extRowN-1], data, posN);
		}
	}//if to do
}//fn
function procArr2D_delFromExtRow(arr2D, extRowN, posN){
	const QToDel=1;
	if(arr2D!=[] && ( (extRowN>=1 && extRowN<=arr2D.length)||(extRowN<0 && -extRowN<=arr2D.length ) ) ){
		if(extRowN<0){
			extRowN+=Q;
		}
		if((posN>=1 && posN<=arr2D[extRowN-1].length)||(posN<0 && -posN<=arr2D[extRowN-1].length)){
			if(posN<0){
				extRowN+=arr2D[extRowN-1].length;
			}
			//procArr1D_del(data, N=0, L=1)
			procArr1D_del(arr2D[extRowN-1], posN, QToDel);
		}
	}//if to do
}//fn
//
function procArr2D_swapExtRows(arr2D, extRow1N, extRow2N){
	let Q=arr2D.length;
	if(extRow1N<0){
		extRow1N+=Q;
	}
	if(extRow2N<0){
		extRow2N+=Q;
	}
	//
	if(extRow1N>=1 && extRow1N<=Q  extRow2N>=1 && extRow2N<=Q && extRow1N!=extRow2N){
		procArr1D_swap(arr2D, extRow1N, extRow2N); 
	}	
}//fn
function procArr2D_reverseExtRows(arr2D, vsh=0){
	procArr1D_reverse(arr2D, vsh);
}
//
function procArr2D_swapIneRows(arr2D, ineRow1N, ineRow2N){
	let QExtRows=procArr2D_GetQExtRows(arr2D);
	if(ineRow1N>=1 && ineRow1N<=procArr2D_getLengthMin(arr2D) && ineRow2N>=1 && ineRow2N<=procArr2D_getLengthMin(arr2D) && ineRow1N!=ineRow2N){
		for(let i=1; i<=QExtRows; i++){
			procArr1D_swap(arr2D, ineRow1N, ineRow2N);
		}
	}
}
function procArr2D_reverseIneRows(arr2D){
	let minL=procArr2D_getLengthMin(arr2D), maxL=procArr2D_getLengthMax(arr2D), Q=Arr2D_GetQExtRows(arr2D);
	if(minL==maxL){
		for(let i=1;i<=Q; i++){
			procArr1D_reverse(arr2D[i-1]);
		}
	}
}
//
function procArr2D_seekElement(arr2D, val){
	let poss=[], poss1, poss2;
	let Q=arr2D_GetQExtRows(arr2D), QFoundAtSnglLine;
	for(let i=1; i<=Q; i++){
		poss1=procArr1D_findVal(arr2D[i-1], val, 1, 0);
		QFoundAtSnglLine=poss1.length;
		if(QFoundAtSnglLine>0){
			poss2=[];
			for(let j=1; j<=QFoundAtSnglLine; j++){
				poss2=[];
				poss2.push(i);
				poss2.push(poss1[j-1]);
				poss.push(poss2);
			}
		}
	}
	return poss;
}
function procArr2D_ValIsAtPos(arr2D, val, LineN, ColN){
	return (LineN>=1 && LineN<=arr2D.length && ColN>=1 && ColN<=arr2D[LineN-1].length && arr2D[LineN-1][ColN-1]===val);
}
function procArr2D_SubArr1DExtIsAtPos(arr2D, subArr1D, LineN, ColN){
	let verdict=false;
	let Q=procArr2D_GetQExtRows(arr2D);
	if(LineN>=1 && LineN<=Q){
		if(ColN>=1 && ColN<=procArr2D_GetLength(LineN)){
			verdict=procArr1D_subArrIsAtPos(arr2D[LineN-1], subArr1D, ColN);
		}
	}
	return verdict;
}
function procArr2D_SubArr1DIneIsAtPos(arr2D, subArr1D, LineN, ColN){
	let verdict=true;
	let Q=procArr2D_GetQExtRows(arr2D);
	let whatL=subArr1D.length;
	if(LineN>=1 && LineN<=Q){
		if(ColN>=1 && ColN<=procArr2D_GetLength(LineN)){
			for(let i=1; i<=whatL; i++){
				if(procArr1D_ValIsAtPos(arr2D[LineN+i-1-1], subArr1D[i-1])==false, ColN){
					verdict=false;
				}
			}
		}
	}
	return verdict;
}
function procArr2D_SubArr2DIsAtPos(arr2D, subArr2D, LineN, ColN){
	let verdict=true;
	let Q=procArr2D_GetQExtRows(arr2D);
	let whatL=subArr1D.length;
	if(LineN>=1 && LineN<=Q){
		if(ColN>=1 && ColN<=procArr2D_GetLength(LineN)){
			for(let i=1; i<=whatL; i++){
				if(procArr1D_subArrIsAtPos(arr2D[LineN+i-1-1], subArr1D[i-1], ColN)==false){
					verdict=false;
				}
			}
		}
	}
	return verdict;
}
function procArr2D_SeekVal(arr2D, val){
	let curL, Q=procArr2D_GetQExtRows(), poss=[], pos=[];
	for(let i=1; i<Q; i++){
		curL=arr2D[i-1].length;
		for(let j=1; j<=curL; j++){
			if(procArr2D_ValIsAtPos(arr2D, val, i, j)){
				pos=[];
				pos.push(i);
				pos.push(j);
				poss.push(pos);
			}
		}
	}
	return poss;
}
function procArr2D_SeekSubArr1DExt(arr2D, subArr1DExt){
	let curL, Q=procArr2D_GetQExtRows(), poss=[], pos=[];
	for(let i=1; i<Q; i++){
		curL=arr2D[i-1].length;
		for(let j=1; j<=curL; j++){
			if(procArr2D_SubArr1DExtIsAtPos(arr2D, subArr1DExt, i, j)){
				pos=[];
				pos.push(i);
				pos.push(j);
				poss.push(pos);
			}
		}
	}
	return poss;
}
function procArr2D_SeekSubArr1DIne(arr2D, subArr1DIne){
	let curL, Q=procArr2D_GetQExtRows(), poss=[], pos=[], QWhat=subArr1DIne.length, LastLineToSeek=Q-QWhat+1;
	for(let i=1; i<LastLineToSeek; i++){
		curL=arr2D[i-1].length;
		for(let j=1; j<=curL; j++){
			if(procArr2D_SubArr1DIneIsAtPos(arr2D, subArr1DIne, i, j)){
				pos=[];
				pos.push(i);
				pos.push(j);
				poss.push(pos);
			}
		}
	}
	return poss;
}
function procArr2D_SeekSubArr2D(arr2D, subArr2D){
	let curL, Q=procArr2D_GetQExtRows(), poss=[], pos=[], QWhat=subArr2D.length, LastLineToSeek=Q-QWhat+1, verdict;
	for(let i=1; i<LastLineToSeek; i++){
		curL=arr2D[i-1].length;
		for(let j=1; j<=curL; j++){
			verdict=true;
			for(let k=1; k<=QWhat; k++){
				if(procArr2D_SubArr1DExtIsAtPos(arr2D[i-1], subArr2D[k-1], i, j)==false){
					verdict==false;
				}
			}
			if(verdict==true){
				pos=[];
				pos.push(i);
				pos.push(j);
				poss.push(pos);
			}
		}
	}
	return poss;
}
//
// procArr2D_GetSubArray
//
// procArr2D

//
let MyArray=["red", "green", "blue"];
document.write("Array: "+procArr1D_toString(MyArray)+"<br>");
document.write("2nd el-t: "+MyArray[2-1]+"<br>");
let elt=MyArray[2-1];//row.getElementN(2);
console.log("2nd el-t: "+String(elt)+"<br>");
document.write("2nd el-t: "+elt+"<br>");
document.write("2nd el-t: "+String(elt)+"<br>");
procArr1D_add(MyArray, "black");
document.write("row af add black: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_swap(MyArray, 2,4);
document.write("row af swap(2,4): "+procArr1D_toString(MyArray)+"<br>");
procArr1D_swap(MyArray, 2,4);
document.write("row af swap(2,4): "+procArr1D_toString(MyArray)+"<br>");
//row.ins("yellow", 2, 1);
procArr1D_ins(MyArray, "yellow", 2);
document.write("row af ins yellow to 2: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_reverse(MyArray);
document.write("row af reverse: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_reverse(MyArray);
document.write("row af reverse: "+procArr1D_toString(MyArray)+"<br>");
if(procArr1D_valIsAtPos(MyArray, "yellow", 2)){
	document.write("yes, yellow is really at pos 2<br>");
}else{
	document.write("no, yellow is NOT at pos 2<br>");
}
if(procArr1D_valIsAtPos(MyArray, "yellow", 3)){
	document.write("yes, yellow is really at pos 3<br>");
}else{
	document.write("no, yellow is NOT at pos 3<br>");
}
let subArr1=["yellow", "green", "blue"];
document.write("subArr1: "+procArr1D_toString(subArr1)+"<br>");
if(procArr1D_subArrIsAtPos(MyArray, subArr1, 2)){
	document.write("yes,  subArr1  is really at pos 2<br>");
}else {
	document.write("no,  subArr1  is NOT at pos 2<br>");
}
if(procArr1D_subArrIsAtPos(MyArray, subArr1, 2)){
	document.write("yes,  subArr1  is really at pos 3<br>");
}else {
	document.write("no,  subArr1  is NOT at pos 3<br>");
}
procArr1D_add(MyArray, "green");
document.write("row af add green: "+(MyArray)+"<br>");
procArr1D_add(MyArray, "black");
let poss=procArr1D_findVal(MyArray, "green");//, FromN=1, ToN=0)();
document.write("poss of green: "+procArr1D_toString(poss)+"<br>");
poss=procArr1D_findSubArr(MyArray, subArr1);//, FromN=1, ToN=0, vsh=0)(subArr1,1,0,1);
document.write("poss of subArr1: "+procArr1D_toString(poss)+"<br>");
procArr1D_replaceVal(MyArray, "green","violet");
document.write("row af replacing green with violet: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_add(MyArray, "blue");
document.write("row af add blue: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_replaceSubArr(MyArray, ["violet", "blue"],["green","white","pink"]);
document.write("row af replacing [violet, blue] with [green,white,pink]: "+procArr1D_toString(MyArray)+"<br>");
//
procArr1D_del(MyArray, 1);
document.write("row af del red at 1: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_del(MyArray, 4);
document.write("row af del  at 4: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_del(MyArray, 2,2);
document.write("row af del  at 2 L=2: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_del(MyArray);
document.write("row af simple del, which means del last : "+procArr1D_toString(MyArray)+"<br>");
procArr1D_setLength(MyArray, 6, "empty_val ");
document.write("row af set L=6, dflt=0: "+procArr1D_toString(MyArray)+"<br>");
procArr1D_setLength(MyArray, 4, "empty_val ");
document.write("row af set L=4, dflt=0: "+procArr1D_toString(MyArray)+"<br>");
//
let subArr=procArr1D_getSubArr(MyArray,-1, 4);
document.write("sub arr(-1, 4): "+procArr1D_toString(subArr)+"<br>");
subArr=procArr1D_getSubArr(MyArray,1, 6);
document.write("sub arr(1,6): "+procArr1D_toString(subArr)+"<br>");
subArr=procArr1D_getSubArr(MyArray,2, 3);
document.write("sub arr(2, 3): "+procArr1D_toString(subArr)+"<br>");
subArr=procArr1D_getSubArr(MyArray);
document.write("sub arr: "+procArr1D_toString(subArr)+"<br>");
//
document.write("row ef ins magenta to 1 twice: "+procArr1D_toString(MyArray)+"<br>");
vsh=0;
procArr1D_ins(MyArray, "magenta",1,vsh);
vsh=1;
procArr1D_ins2(MyArray, "magenta",1, vsh);
document.write("row af ins magenta to 1: "+procArr1D_toString(MyArray)+"<br>");
document.write("----------------------------------------------------------------"+"<br>");
let arrLong=[1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrShort=[10, 30, 40, 60, 70, 90];
let mask=[1, 0, 1, 1, 0, 1, 1, 0, 1];
let arrShortR=getMaskedArrayAllowedPart(arrLong, mask);
document.write("Long array: "+procArr1D_toString(arrLong)+"<br>");
document.write("mask: "+procArr1D_toString(mask)+"<br>");
document.write("Arr shortened by mask: "+procArr1D_toString(arrShortR)+"<br>");
vsh=0;
arrLongR=writeAllowedValsToMaskedArray(arrLong, arrShort, mask, vsh);
document.write("Long arr, written from short by mask: "+procArr1D_toString(arrLongR)+"<br>");
vsh=1;
let arrStr=['A', 'B', 'C', 'C_N6', 'C_N6_N6'];
let val_toBeUnique=procArr1D_ModifyNewStringValToUnique(arrStr, 'C', N=6, befN="_N", aftN="", vsh);
document.write("Adding to:"+procArr1D_toString(arrStr)+"<br>");
document.write("First to Add: C <br>");
document.write("Finallyto Add:"+val_toBeUnique+"<br>");
pos1=2;
pos2=-2;
 subArr=getSubarrayBySliceNatural(arrLong, pos1, pos2);
document.write("Arr slice(2, -2): "+procArr1D_toString(subArr)+"<br>");
pos1=-2;
pos2=2;
 subArr=getSubarrayBySliceNatural(arrLong, pos1, pos2);
document.write("Arr slice(-2, 2): "+procArr1D_toString(subArr)+"<br>");
pos1=2;
pos2=arrLong.length-2;
 subArr=getSubarrayBySliceNatural(arrLong, pos1, pos2);
document.write("Arr slice(2, L-2): "+procArr1D_toString(subArr)+"<br>");
pos1=2;
pos2=0;
 subArr=getSubarrayBySliceNatural(arrLong, pos1);
document.write("Arr slice(2): "+procArr1D_toString(subArr)+"<br>");
pos1=2;
pos2=0;
 subArr=getSubarrayBySliceNatural(arrLong);
document.write("Arr slice(): "+procArr1D_toString(subArr)+"<br>");
document.write("============================================================================="+"<br>");
//let arr1D=[1, 2, 3, 4];
//let RowExt0Ine1=0;
//let arr2D_1DExt= procArr2D_SetFrom1D(arr1D, RowExt0Ine1);
//document.write("arr2D of ext "+procArr2D_toString(arr2D_1DExt));
//RowExt0Ine1=1;

//let arr2D_1DIne= procArr2D_SetFrom1D(arr1D, RowExt0Ine1);
//document.write("arr2D of ine "+procArr2D_toString(arr2D_1DIne));