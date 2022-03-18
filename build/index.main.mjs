// Automatically generated with Reach 0.1.9 (402c3faa)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (402c3faa)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v86 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v89 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:23:54:application',
    fs: ['at ./index.rsh:22:15:application call to [unknown function] (defined at: ./index.rsh:22:19:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v89, v86],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v86, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v91, v92], secs: v94, time: v93, didSend: v31, from: v90 } = txn1;
      
      sim_r.txns.push({
        amt: v92,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v91, v92], secs: v94, time: v93, didSend: v31, from: v90 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v102], secs: v104, time: v103, didSend: v43, from: v101 } = txn2;
  ;
  const v107 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:37:37:decimal', stdlib.UInt_max, 4), v102);
  const v108 = stdlib.add(v91, v107);
  const v109 = stdlib.mod(v108, stdlib.checkedBigNumberify('./index.rsh:37:53:decimal', stdlib.UInt_max, 3));
  const v110 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:38:35:decimal', stdlib.UInt_max, 1));
  const v111 = stdlib.mod(v110, stdlib.checkedBigNumberify('./index.rsh:38:38:decimal', stdlib.UInt_max, 3));
  const v112 = stdlib.eq(v102, v111);
  stdlib.assert(v112, {
    at: './index.rsh:38:14:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v128 = stdlib.mul(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), v92);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v109), {
    at: './index.rsh:49:28:application',
    fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v91, v92], secs: v94, time: v93, didSend: v31, from: v90 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v92), {
    at: './index.rsh:31:29:application',
    fs: ['at ./index.rsh:30:15:application call to [unknown function] (defined at: ./index.rsh:30:19:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v99 = stdlib.add(v91, stdlib.checkedBigNumberify('./index.rsh:32:38:decimal', stdlib.UInt_max, 1));
  const v100 = stdlib.mod(v99, stdlib.checkedBigNumberify('./index.rsh:32:43:decimal', stdlib.UInt_max, 3));
  
  const txn2 = await (ctc.sendrecv({
    args: [v91, v92, v100],
    evt_cnt: 1,
    funcNum: 1,
    lct: v93,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v92, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v102], secs: v104, time: v103, didSend: v43, from: v101 } = txn2;
      
      sim_r.txns.push({
        amt: v92,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v107 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:37:37:decimal', stdlib.UInt_max, 4), v102);
      const v108 = stdlib.add(v91, v107);
      const v109 = stdlib.mod(v108, stdlib.checkedBigNumberify('./index.rsh:37:53:decimal', stdlib.UInt_max, 3));
      const v112 = stdlib.eq(v102, v100);
      ;
      const v128 = stdlib.mul(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), v92);
      sim_r.txns.push({
        amt: v128,
        kind: 'from',
        to: v101,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v102], secs: v104, time: v103, didSend: v43, from: v101 } = txn2;
  ;
  const v107 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:37:37:decimal', stdlib.UInt_max, 4), v102);
  const v108 = stdlib.add(v91, v107);
  const v109 = stdlib.mod(v108, stdlib.checkedBigNumberify('./index.rsh:37:53:decimal', stdlib.UInt_max, 3));
  const v112 = stdlib.eq(v102, v100);
  stdlib.assert(v112, {
    at: './index.rsh:38:14:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  const v128 = stdlib.mul(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), v92);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v109), {
    at: './index.rsh:49:28:application',
    fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgIAAQAiNQAxGEEBGyhkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAVSMSRCM0ARJENARJIhJMNAISEUQpZEk1AyRbNf9JNQUXNf6ABNUVGRQ0/hZQsDT/iADKNP40AyJbIwiBAxgSRLEisgGBAjT/C7III7IQMQCyB7NCAFFIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsIGgjQaIAHQ0/ogAbzT/FjT+FlApSwFXABBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 16,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107ac3803806107ac833981016040819052610022916101e8565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602080820151015161008590341460076100f0565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e89260029290910190610119565b50505061027d565b816101155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012590610242565b90600052602060002090601f016020900481019282610147576000855561018d565b82601f1061016057805160ff191683800117855561018d565b8280016001018555821561018d579182015b8281111561018d578251825591602001919060010190610172565b5061019992915061019d565b5090565b5b80821115610199576000815560010161019e565b604080519081016001600160401b03811182821017156101e257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fb57600080fd5b6102036101b2565b835181526040601f198301121561021957600080fd5b6102216101b2565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025657607f821691505b6020821081141561027757634e487b7160e01b600052602260045260246000fd5b50919050565b6105208061028c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610374565b6100b8565b3480156100a157600080fd5b506100aa61025c565b60405161006492919061038c565b6100c8600160005414600a6102f9565b6100e2813515806100db57506001548235145b600b6102f9565b6000808055600280546100f4906103e9565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103e9565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061041e565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d68160200151341460086102f9565b6102036003600183600001516101ec9190610491565b6101f691906104a9565b60208401351460096102f9565b602081015133906108fc906102199060026104cb565b6040518115909202916000818181858888f19350505050158015610241573d6000803e3d6000fd5b50600080805560018190556102589060029061031e565b5050565b600060606000546002808054610271906103e9565b80601f016020809104026020016040519081016040528092919081815260200182805461029d906103e9565b80156102ea5780601f106102bf576101008083540402835291602001916102ea565b820191906000526020600020905b8154815290600101906020018083116102cd57829003601f168201915b50505050509050915091509091565b816102585760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461032a906103e9565b6000825580601f1061033a575050565b601f016020900490600052602060002090810190610358919061035b565b50565b5b80821115610370576000815560010161035c565b5090565b60006040828403121561038657600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103c0578581018301518582016060015282016103a4565b818111156103d2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103fd57607f821691505b6020821081141561038657634e487b7160e01b600052602260045260246000fd5b60006040828403121561043057600080fd5b6040516040810181811067ffffffffffffffff8211171561046157634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156104a4576104a461047b565b500190565b6000826104c657634e487b7160e01b600052601260045260246000fd5b500690565b60008160001904831182151516156104e5576104e561047b565b50029056fea26469706673582212202f0f538af677d70952463701c646e28c1daea2b538c7074a65fd62fca06e704f64736f6c634300080c0033`,
  BytecodeLen: 1964,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:46:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
