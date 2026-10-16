const defaults = [
  {name:"ChatGPT", command:".chatgpt", description:"General AI answers", enabled:true},
  {name:"Gemini", command:".gemini", description:"Google AI assistant", enabled:true},
  {name:"DeepSeek", command:".deepseek", description:"Reasoning and coding", enabled:true},
  {name:"Claude", command:".claude", description:"Writing and analysis", enabled:true},
  {name:"Grok", command:".grok", description:"General AI assistant", enabled:false},
  {name:"Math", command:".math", description:"Math help and calculations", enabled:true}
];
const key = "rizwan-ai-admin-demo-v1";
let state;
try { state = JSON.parse(localStorage.getItem(key)) || {}; } catch { state = {}; }
const commands = defaults.map(item => ({...item, enabled: state.commands?.[item.command] ?? item.enabled}));
const list = document.getElementById("command-list");
function updateCount(){ document.getElementById("enabled-count").textContent = `${commands.filter(c=>c.enabled).length} enabled`; }
function save(){ localStorage.setItem(key, JSON.stringify({commands:Object.fromEntries(commands.map(c=>[c.command,c.enabled])), name:document.getElementById("bot-name").value, prefix:document.getElementById("prefix").value})); }
function render(){
  list.innerHTML = "";
  commands.forEach((item,index)=>{
    const row=document.createElement("div"); row.className="command";
    const info=document.createElement("div");
    const title=document.createElement("strong"); title.textContent=item.name;
    const code=document.createElement("code"); code.textContent=item.command;
    const desc=document.createElement("p"); desc.textContent=item.description;
    info.append(title,code,desc);
    const toggle=document.createElement("input"); toggle.type="checkbox"; toggle.className="toggle"; toggle.checked=item.enabled; toggle.setAttribute("aria-label",`Enable ${item.name}`);
    toggle.addEventListener("change",()=>{commands[index].enabled=toggle.checked;save();updateCount();});
    row.append(info,toggle); list.append(row);
  });
  updateCount();
}
const nameInput=document.getElementById("bot-name");
const prefixInput=document.getElementById("prefix");
if(state.name) nameInput.value=state.name;
if(state.prefix) prefixInput.value=state.prefix;
document.getElementById("settings-form").addEventListener("submit",event=>{
  event.preventDefault();
  if(!prefixInput.value.trim()){prefixInput.focus();return;}
  save();
  document.getElementById("save-message").textContent="Saved in this browser only. Live bot settings are not connected.";
});
render();
